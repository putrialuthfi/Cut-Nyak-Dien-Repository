import express from "express";
import cors from "cors";
import ScheduleRoute from "./routes/ScheduleRoute.js";
import PsyProfileRoute from "./routes/PsyProfileRoute.js"
import ChildMonRoute from "./routes/ChildMonRoute.js"


const app = express();
app.use(cors());
app.use(express.json());
app.use(ScheduleRoute);
app.use(PsyProfileRoute);
app.use(ChildMonRoute);

app.listen(5000, ()=> console.log('Server up and running...'));