const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    date: { type: Date, default: Date.now },
    exercises: [
        {
            name: {
                required: "Please Enter a Name.",
                trim: true,
                type: String,
            },
            type: {
                type: String,
                trim: true,
                required: " Please Enter Type of Exercise",
            },
            duration: {
                type: Number,
                required: "PleaseEnter Exercise duration",
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
        },
    ],
});

WorkoutSchema.methods.totalDuration = function () {
    const totalTime = this.exercises.reduce(
        (accumulator, curVal) => accumulator + curVal
    );
};

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
