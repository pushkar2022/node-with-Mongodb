const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();



app.use(cors());


app.use(express.json());


app.use(express.urlencoded({ extended: true }));


mongoose
  .connect('mongodb://localhost:27017/school', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });


app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});


app.use('/auth', require('./Routes/userLogin.js'));
app.use('/user', require('./Routes/student.js'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
