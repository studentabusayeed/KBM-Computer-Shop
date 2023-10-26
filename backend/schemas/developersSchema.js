import { Schema } from "mongoose";

const developersSchema = new Schema(
    {
        name: String,
      title: String,
    }
  );
export default developersSchema;