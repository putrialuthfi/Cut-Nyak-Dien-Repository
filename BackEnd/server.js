import express from "express";
import cors from "cors";
import mysql from 'mysql';
import bodyParser from 'body-parser';
import ScheduleRoute from "./routes/ScheduleRoute.js";
import PsyProfileRoute from "./routes/PsyProfileRoute.js";
import ChildMonRoute from "./routes/ChildMonRoute.js";
import StuntingRoute from "./routes/StuntingRoute.js";
import PpChildRoute from "./routes/PpChildRoute.js";
import Schedule from "./models/ScheduleModel.js";

// MVP
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(ScheduleRoute);
app.use(PsyProfileRoute);
app.use(ChildMonRoute);
app.use(StuntingRoute);
app.use(PpChildRoute);

// CREATE CONNECTION DB
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

// Endpoint untuk post data user
app.get('/schedules', async (req, res) => {
    try {
      const schedules = await Schedule.findAll();
      res.json(schedules);
    } catch (error) {
      console.error('Error fetching schedules:', error);
      res.status(500).json({ error: error.message });
    }
  });

// Endpoint untuk mendapat data dari schedule
// app.get('/schedules', async (req, res) => {
//     try {
//       const schedules = await Schedule.findAll();
//       res.json(schedules);
//     } catch (error) {
//       console.error('Error fetching schedules:', error);
//       res.status(500).json({ error: error.message });
//     }
//   });

// // Untuk menambah data schedule
// app.post('/schedules', async (req, res) => {
//   try {
//     const { tanggal, waktu, lokasi, kegiatan, deskripsi } = req.body;
//     console.log('Data yang diterima:', req.body);
//     const newSchedule = await Schedule.create({
//       tanggal,
//       waktu,
//       lokasi,
//       kegiatan,
//       deskripsi
//     });
//     res.status(201).json(newSchedule);
//   } catch (error) {
//     console.error('Error creating schedule:', error);
//     res.status(500).json({ error: error.message });
//   }
// });

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

app.post('/login', (req, res) => {
    const sql = "SELECT email, password FROM users WHERE email = ? AND password = ?";
    const values = [
        req.body.email,
        req.body.password
    ];
    db.query(sql, values, (err, data) => {
        if (err) return res.status(500).json({ message: "Database error" });
        if (data.length > 0) {
            const user = data[0]; // Assuming there's only one user (unique email constraint)
            // Send user information along with success message
            return res.status(200).json({
                message: "Login Successfully!",
                user: {
                    email: user.email
                }
            });
        } else {
            return res.status(401).json({ message: "Invalid email or password" });
        }
    });
});

// Untuk menjalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});