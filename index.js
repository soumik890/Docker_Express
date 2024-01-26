import express from "express";
import mongoose from "mongoose";
import crudRoute from "./routes/crudRoute.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from docker server");
});

app.use("", crudRoute);

app.listen(5000, (req, res) => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/docker_crud")
    .then(() => console.log("Connected to db server running!"));
});
