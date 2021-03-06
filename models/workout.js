const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schemaOptions = {
    toJSON: {
        virtuals: true,
    },
};

const WorkoutSchema = new Schema(
    {
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
                distance: {
                    type: Number,
                },
            },
        ],
    },
    schemaOptions
);

let workoutSchemaVirtual = WorkoutSchema.virtual("totalDuration");

workoutSchemaVirtual.get(function () {
    return this.exercises.reduce((acc, curr) => acc + curr.duration, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
