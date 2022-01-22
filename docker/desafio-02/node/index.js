const express = require("express");
const { Db } = require("./db");
const app = express();
const port = 3000;

const createSql = `CREATE TABLE IF NOT EXISTS people (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(50), PRIMARY KEY (id));`;
const insertSql = `INSERT INTO people (name) values ('Isadora'), ('Maicon'), ('Bob')`;
const sqlSelect = `SELECT * FROM people`;

app.get("/", async (_, res) => {
  const people = await Db.query(sqlSelect);
  const title = "<h1>Full Cycle Rocks!</h1>";
  const list = `
    <ul>
      ${people.map((p) => `<li>${p.name}</li>`).join("")}
    </ul>
  `;
  res.send(title + list);
});

app.listen(port, () => {
  console.log("Rodando na porta " + port);
  Db.query(createSql);
  Db.query(insertSql);
});
