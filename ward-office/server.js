const express = require("express");
const app = express();
const dotenv = require("dotenv");
const router = require("./server/routes/routes");
const path = require("path");

dotenv.config({ path: ".env" });
const PORT = process.env.PORT || 8080;

// set view engine
app.set("view engine", "ejs"); // allows us to use ejs template engine

// load assets

app.use("/css", express.static(path.resolve(__dirname, "assets/css")));

app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

app.use("/img", express.static(path.resolve(__dirname, "assets/img")));


// loading routes
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
