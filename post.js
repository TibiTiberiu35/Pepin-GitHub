const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const students = [
  {
    id: 1,
    name: "Logan",
    car: "Dacia"
  },
  {
    id: 2,
    name: "Jimin",
    car: "Toyota"
  },
  {
    id: 3,
    name: "Gigel",
    car: "Lada"
  }
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/students", (req, res) => {
  var name = req.body.name;
  const student = {
    id: students.length + 1,
    name: name
  };
  students.push(student);
  res.send(students);
});

app.put("/api/students/update/:id", function(req, res) {
  var id = parseInt(req.params.id);
  var updatedStudent = req.body;
  if (students[id] != null) {
    students[id] = updatedStudent;
  } else {
    res.status(404).send("Error!");
  }
  res.send(students);
});

app.delete("/api/students/delete/:id", function(req, res) {
  var id = parseInt(req.params.id);
  if (students[id] != null) {
    students.splice(id, 1);
  } else {
    res.status(404).send("Error!");
  }
  res.send(students);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}!`));
