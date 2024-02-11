const express = require("express");

const routes = require("./routes");

const app = express();



// POSSIBILITA O USO DE BODY PARSE DENTRO DE CONTROLLER
app.use(express.json());


app.use(routes);

app.listen(3000, () =>
  console.log("🔥 Server started at https://bug-free-waddle-qpx4j5797v5c9vq9-3000.app.github.dev")
);
