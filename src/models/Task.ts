import mongoose from "mongoose";

interface ITask extends mongoose.Document {
  title: string;
  description: string;
  status: boolean;
  dueDate: Date;
  user: mongoose.Schema.Types.ObjectId;
}

const taskSchema = new mongoose.Schema<ITask>({
  title: { type: String, required: true },
  description: String,
  status: {
    type: Boolean,
    default: false,
  },
  dueDate: Date,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

export default mongoose.model<ITask>("Task", taskSchema);
