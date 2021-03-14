const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8080;
const itemsRouter = require("./routes/items");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/items", itemsRouter);

app.listen(port);
console.log("API escuchando en el puerto " + port);
