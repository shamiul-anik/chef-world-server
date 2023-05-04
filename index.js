const express = require("express"); // express import
const cors = require("cors"); // cors middleware import

const app = express(); // creating app
const port = process.env.PORT || 5000;
app.use(cors()); // As we are calling from the API, we need to use cors middleware

app.get("/", (req, res) => {
  res.send("Chef World's server is running!"); // sending response to the server
});

const chefs = require("./data/chefs.json"); // chefs data import

app.get("/chefs", (req, res) => {
  res.send(chefs); // sending chefs data as response
});

app.get(`/recipes/:id`, (req, res) => {
  const id = req.params.id; // requesting for specific chef's details with id
  const findDetails = chefs.find((details) => details.id === id);
  res.send(findDetails); // finding details information about Chef's recipes with id
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
