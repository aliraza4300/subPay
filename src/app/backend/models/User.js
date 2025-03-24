import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    userType: { type: String, required: true, default: "N/A" },
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
