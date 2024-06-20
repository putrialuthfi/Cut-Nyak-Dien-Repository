const express = require("express");
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

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

app.post('/users', (req,res) => {
    const { email, password, confirm } = req.body; // Destructure values from req.body

    // Ensure all required fields are present
    if (!email || !password || !confirm) {
        return res.status(400).json({ message: "All fields are required" });
    }

    // SQL query corrected with placeholders
    const sql = "INSERT INTO users (email, password, confirm) VALUES (?, ?, ?)";
    const values = [email, password, confirm];

    db.query(sql, values, (err, result) => {
        if(err) {
            console.error('Error executing query: ' + err.stack);
            return res.status(500).json({ message: "Database error" });
        }
        console.log("New user added: ", result.insertId);
        return res.status(201).json({ message: "User added successfully", userId: result.insertId });
    });
});


const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});