const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')
const courses = require('./courses.json')


app.use(cors())

app.get("/", (req, res) => {
  res.send("Assignmment api server running");
});
app.get('/courses', (req, res) => {
  res.send(courses)
})

app.get('/courses/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  const course = courses.find(singleCourse => singleCourse.id == id);
  res.send(course)

})

app.listen(port, () => {
  console.log("Learning Platform file reloading");
});
