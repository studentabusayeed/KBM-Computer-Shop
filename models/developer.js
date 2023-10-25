import mongoose from "mongoose";
import developersSchema from "../schemas/developersSchema";

const Developer = mongoose.models.Developer || mongoose.model("Developer", developersSchema);

export default Developer;