import express from "express";
import cors from "cors";
import mysql from 'mysql';
import ScheduleRoute from "./routes/ScheduleRoute.js";
import PsyProfileRoute from "./routes/PsyProfileRoute.js";
import ChildMonRoute from "./routes/ChildMonRoute.js";
import StuntingRoute from "./routes/StuntingRoute.js";
import PpChildRoute from "./routes/PpChildRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(ScheduleRoute);
app.use(PsyProfileRoute);
app.use(ChildMonRoute);
app.use(StuntingRoute);
app.use(PpChildRoute);

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_posyandu"
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ' + err.stack);
        return;
    }
    console.log('Connected to database as id ' + db.threadId);
});

app.post('/users', (req, res) => {
    const { email, password, confirm } = req.body;

    if (!email || !password || !confirm) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const sql = "INSERT INTO users (email, password, confirm) VALUES (?, ?, ?)";
    const values = [email, password, confirm];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error executing query: ' + err.stack);
            return res.status(500).json({ message: "Database error" });
        }
        console.log("New user added: ", result.insertId);
        return res.status(201).json({ message: "User added successfully", userId: result.insertId });
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});