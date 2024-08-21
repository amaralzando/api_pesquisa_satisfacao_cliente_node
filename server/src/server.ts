import { config } from "dotenv";
import express from "express";
import { router } from "./router";

config();

const port = process.env.PORT || 3333;
const app = express();
app.use(express.json());

app.use("/api", router);

app.listen(port, () => console.log(`Servidor online na port ${port}`));
