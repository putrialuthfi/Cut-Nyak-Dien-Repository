import express from "express";
import cors from "cors";
import ScheduleRoute from "./routes/ScheduleRoute.js";


const app = express();
app.use(cors());
app.use(express.json());
app.use(ScheduleRoute);

app.listen(5000, ()=> console.log('Server up and running...'));