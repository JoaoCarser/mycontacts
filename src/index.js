const express = require("express");

const routes = require("./routes");

const app = express();



// POSSIBILITA O USO DE BODY PARSE DENTRO DE CONTROLLER
app.use(express.json());


app.use(routes);

app.listen(3000, () =>
  console.log("🔥 Server started at http://localhost:3000")
);
