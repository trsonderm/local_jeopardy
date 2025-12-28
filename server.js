const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const db = require('./database.js');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '.')));

// Register
app.post('/api/register', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: "Username and password required" });
    }
    const hash = bcrypt.hashSync(password, 10);
    const sql = `INSERT INTO users (username, password) VALUES (?, ?)`;
    db.run(sql, [username, hash], function (err) {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        res.json({ message: "User created", id: this.lastID });
    });
});

// Login
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const sql = `SELECT * FROM users WHERE username = ?`;
    db.get(sql, [username], (err, row) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        if (!row) {
            return res.status(401).json({ error: "Invalid credentials" });
        }
        if (bcrypt.compareSync(password, row.password)) {
            res.json({ message: "Login successful", user: { id: row.id, username: row.username } });
        } else {
            res.status(401).json({ error: "Invalid credentials" });
        }
    });
});

// Get User Progress
app.get('/api/progress/:userId', (req, res) => {
    const userId = req.params.userId;
    const sql = `SELECT game_id FROM user_progress WHERE user_id = ?`;
    db.all(sql, [userId], (err, rows) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        res.json({ playedGames: rows.map(r => r.game_id) });
    });
});

// Mark Game as Played
app.post('/api/progress', (req, res) => {
    const { userId, gameId } = req.body;
    const sql = `INSERT OR IGNORE INTO user_progress (user_id, game_id) VALUES (?, ?)`;
    db.run(sql, [userId, gameId], function (err) {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        res.json({ message: "Progress saved" });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
