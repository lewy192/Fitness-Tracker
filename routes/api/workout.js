const router = require("express").Router();

const Workout = require("../../models/workout");

router.get("/", async (req, res) => {
    try {
        const workoutData = await Workout.find({}).sort({ date: "desc" });
        if (!workoutData) {
            res.status(200).json({ message: "No Workout data present" });
        }
        res.status(200).json(workoutData);
    } catch (err) {
        console.log(err);
        res.status(500).json({ errMessage: err });
    }
});
// router.post();
// router.put('/:id', async (req,res)=>{
// });
// router.delete();

module.exports = router;
