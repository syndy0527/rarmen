import express from "express";
import { rarmenRouter } from "./routes/rarmen.route.js";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const port = 3001;

app.use("/rarmen", (req, res) => rarmenRouter(req, res));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});