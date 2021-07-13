const router = require("express").Router();

const Workout = require("../../models/workout");

router.get("/", async (req, res) => {
    try {
        const workoutData = await Workout.find({}).sort({ date: "desc" });
        if (!workoutData) {
            res.status(200).json({ message: "No Workout data present" });
        }
        // const workout = await new Workout(workoutData);
        // console.log("workout:" + workout);
        // workoutData.totalDuration = await workout.totalDuration();
        // console.log(workoutData);
        console.log(workoutData[workoutData.length - 1].totalDuration);
        res.status(200).json(workoutData);
    } catch (err) {
        console.log(err);
        res.status(500).json({ errMessage: err });
    }
});

router.post("/", async (req, res) => {
    try {
        const { body: workoutBody } = req;
        console.log(req.body);
        const newWorkout = await Workout.create(workoutBody);
        console.log(newWorkout);
        res.status(200).json(newWorkout);
    } catch (err) {
        console.log(err);
        res.status(500).json({ errMessage: err });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const { body: exerciseData } = req;
        const { id: workoutId } = req.params;
        const selectedWorkout = await Workout.findOneAndUpdate(
            { _id: workoutId },
            { $push: { exercises: exerciseData } }
        );
        res.status(200).json(selectedWorkout);
    } catch (err) {
        console.log(err);
        res.status(500).json({ errMessage: err });
    }
});

router.get("/range", async (req, res) => {
    try {
        const rangedWorkoutData = await Workout.find({})
            .sort({ date: "desc" })
            .limit(7);

        res.status(200).json(rangedWorkoutData);
    } catch (err) {
        console.log(err);
        res.status(500).json({ errMessage: err });
    }
});

module.exports = router;
