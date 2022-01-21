const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const bodyParser = require("body-parser");
const compression = require("compression");
const db = require("./db");

//middleware
app.use(cors());
app.use(express.json());
app.use(compression());
app.use(bodyParser.json());

//ROUTES//

//create a hero
app.post("/jl", db.createHero);

//Used the code below in the code along without login

/*async (req, res) => {
  try {
    const { name } = req.body;
    const newMember = await pool.query(
      "INSERT INTO members (name) VALUES($1) RETURNING *",
      [name]
    );

    res.json(newMember.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
}*/

//get all heroes

app.get("/jl", db.getHeroes);

//Used the code below in the code along without login

/*async (req, res) => {
  try {
    const allMembers = await pool.query("SELECT * FROM members");
    res.json(allMembers.rows);
  } catch (err) {
    console.error(err.message);
  }
}*/

//get a specified hero

app.get("/jl/:id", db.getSpecificHero);

//Used the code below in the code along without login

/* async (req, res) => {
  try {
    const { id } = req.params;
    const members = await pool.query(
      "SELECT * FROM members WHERE members_id = $1",
      [id]
    );

    res.json(members.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
}*/

//update a hero

app.put("/jl/:id", pool.updateHero);

//Used the code below in the code along without login

/*async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updateMembers = await pool.query(
      "UPDATE members SET name = $1 WHERE members_id = $2",
      [name, id]
    );
    res.json("League roster was updated!");
  } catch (error) {
    console.error(err.message);
  }
}*/

//delete a todo
app.delete("/jl/:id", db.deleteHero);

//Used the code below in the code along without login

/*async (req, res) => {
  try {
    const { id } = req.params;
    const deleteMember = await pool.query(
      "DELETE FROM members WHERE members_id = $1",
      [id]
    );
    res.json("Member was removed from the roster!");
  } catch (err) {
    console.error(err.message);
  }
}*/

app.post("/signup", db.createUser);

app.post("/login", db.login);

app.get("/users", db.getUsers);

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
