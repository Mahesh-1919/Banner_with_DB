const express = require("express");
const { Client } = require("pg");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const client = new Client({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

client.connect();

app.get("/api/banner", async (req, res) => {
  const result = await client.query("SELECT * FROM Banner");
  res.json(result.rows);
});

app.post("/api/banner", async (req, res) => {
  const { title, image, description, link, time } = req.body;
  const result = await client.query(
    "INSERT INTO Banner (title, image,description,link,time) VALUES ($1, $2,$3,$4,$5) RETURNING *",
    [title, image, description, link, time]
  );
  res.json(result.rows[0]);
});
app.put("/api/banner/:id", async (req, res) => {
  const { id } = req.params;
  const { title, image, description, link, time } = req.body;
  const result = await client.query(
    "UPDATE Banner SET title = $1, image = $2,description=$3,link=$4,time=$5 WHERE id = $6 RETURNING *",
    [title, image, description, link, time, id]
  );
  res.json(result.rows[0]);
});

app.get("/api/product", async (req, res) => {
  const result = await client.query("SELECT * FROM Product");
  res.json(result.rows);
});

app.post("/api/product", async (req, res) => {
  const { title, price, image } = req.body;
  const result = await client.query(
    "INSERT INTO Product (title, price, image) VALUES ($1, $2, $3) RETURNING *",
    [title, price, image]
  );
  res.json(result.rows[0]);
});

app.listen(3000, () => console.log("Server is running..."));
