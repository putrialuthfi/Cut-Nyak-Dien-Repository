import express from "express";
import cors from "cors";
import InfoJadwalRoute from "./routes/InfoJadwalRoute.js";


const app = express();
app.use(cors());
app.use(express.json());
app.use(InfoJadwalRoute);

app.listen(5000, ()=> console.log('Server up and running...'));