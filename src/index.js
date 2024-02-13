const express = require("express");
require('express-async-errors');

const routes = require("./routes");

const app = express();



// POSSIBILITA O USO DE BODY PARSE DENTRO DE CONTROLLER
app.use(express.json());


app.use(routes);

// ERROR HANDLER SEMPRE VEM DEPOIS DAS ROTAS
// COM ESSE PADRÃO DE 4 ARGUMENTOS O EXPRESS IDENTIFICA QUE É UM 'ERROR HANDLER'
app.use((error, request, response, next) => {
  console.log('##### ERROR HANDLER ####');
  console.error(error);
  response.sendStatus(500);
});

app.listen(3000, () =>
  console.log("🔥 Server started at https://bug-free-waddle-qpx4j5797v5c9vq9-3000.app.github.dev")
);
