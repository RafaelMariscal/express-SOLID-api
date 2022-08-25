import express, { json } from "express";

const app = express();
const port = 3333;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.post("/courses", (req, res) => {
  const { name } = req.body;
  return res.json({ name });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
