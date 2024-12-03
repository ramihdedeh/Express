const db = require('../db/connection');

// Log usernames to the console
exports.logUsernames = async (req, res) => {
    try {
        const searchQuery = req.query.search; // Optional search query
        let query = 'SELECT * FROM usernames';
        const queryParams = [];

        if (searchQuery) {
            query += ' WHERE username LIKE ?';
            queryParams.push(`%${searchQuery}%`);
        }

        const [rows] = await db.query(query, queryParams);

        // Render EJS view and pass the list of users
        res.render('index', { users: rows, searchQuery });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching usernames");
    }
};

// Display HTML form
exports.showForm = (req, res) => {
    res.render('form');
};

// Save username to DB
exports.saveUsername = async (req, res) => {
    try {
        console.log("username to be saved: ", req.body.username);
        const { username } = req.body;
        if (!username) {
            return res.status(400).send("Username is required.");
        }
        await db.query('INSERT INTO usernames (username) VALUES (?)', [username]);
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error saving username");
    }
};
exports.deleteUsernames = async (req, res) => {
    try {
        await db.query('DELETE FROM usernames');
        console.log("All usernames deleted from the database.");
        res.send("All usernames have been deleted.");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error deleting usernames");
    }
};

