import express from "express";
import { config } from "dotenv";
import connectMongo from "./db/mongo.js";
config();
import authRoutes from "./routes/authRoutes.js";
import recipeRoutes from "./routes/recipeRoutes.js";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api", recipeRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${Number(port)}`);
});

connectMongo();
