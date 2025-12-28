const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./jeopardy.db', (err) => {
    if (err) {
        console.error("Error opening database " + err.message);
    } else {
        console.log("Connected to the SQLite database.");
        db.run(`CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE,
            password TEXT
        )`);

        db.run(`CREATE TABLE IF NOT EXISTS user_progress (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            game_id INTEGER,
            UNIQUE(user_id, game_id),
            FOREIGN KEY(user_id) REFERENCES users(id)
        )`);
    }
});

module.exports = db;
