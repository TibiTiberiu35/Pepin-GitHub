const express = require("express");
const app = express();
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

// app.get("/api/student", function(req, res) {
//   res.send(student);
// });
// app.get("/api/student/:id", function(req, res) {
//   student[req.params.id] == null
//     ? res.status(404).send("Error!")
//     : res.send(student[req.params.id]);
// });

app.post("/api/students", (req, res) => {
  var name = req.body.name;
  const student = {
    id: students.length + 1,
    name: name
  };
  students.push(student);
  res.send(students);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}!`));
