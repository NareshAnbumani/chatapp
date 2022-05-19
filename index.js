const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config/app");
const app = express();
const port = config.appPort;
const router = require("./router");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
app.use(router);
