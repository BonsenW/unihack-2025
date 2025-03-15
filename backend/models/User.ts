import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userId: {type: String, required: true, unique: true},
    gender: {type: String, required: true},
    ageRange: {type: [String], required: true},
    interests: {type: [String], default: []},
    pets: {type: String, required: true},
    budgetRange: {type: String, required: true},
    garageSpace: {type: String, required: true}
})

const User = mongoose.model("User", userSchema);

export default User;