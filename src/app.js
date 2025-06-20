import express from "express";
import selecaoRoutes from "./routes/selecao.routes.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Hello World!"));
app.use("/selecoes", selecaoRoutes);

export default app;
