require("dotenv").config();
const bcrypt = require("bcryptjs");
const { emailValidation, passwordValidation } = require("./validation");
const Pool = require("pg").Pool;

const pool = new Pool({
  user: `${process.env.DB_USER}`,
  password: `${process.env.DB_PASSWORD}`,
  host: `${process.env.DB_HOST}`,
  port: process.env.DB_PORT,
  database: `${process.env.DB_DATABASE}`,
});

const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    let errors = {};

    if (!emailValidation(email)) {
      errors.email = "Email is not valid";
    }

    if (!passwordValidation(password)) {
      errors.password = "Password is not valid";
    }

    const isEmailInUse = await pool.query(
      "SELECT * FROM users WHERE email=$1",
      [email]
    );

    if (isEmailInUse.rows.length > 0) {
      errors.email = "Email is already in use";
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json(errors);
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await pool.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
      [username, email, hashedPassword]
    );

    res.json(newUser.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    let errors = {};

    const user = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (user.rows.length === 0) {
      res.status(400).json({ error: "Email not registered" });
      return;
    }

    const isMatch = await bcrypt.compare(password, user.rows[0].password);
    if (!isMatch) {
      errors.password = "Password is incorrect";
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json(errors);
    }

    res.json({ success: true, data: user.rows[0] });
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
};

module.exports = pool;
module.exports = { createUser, login };
