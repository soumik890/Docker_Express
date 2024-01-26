import mongoose from "mongoose";

const crudModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("crudModel", crudModel);
