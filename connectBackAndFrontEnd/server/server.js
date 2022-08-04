const express = require("express");
const app = express();
const dotenv = require("dotenv");

const connectDb = require("./server/database/connection");
const router = require("./server/routes/route");

dotenv.config({ path: ".env" });
const PORT = process.env.PORT || 8080;

const cors = require("cors");
//connecting mongodb
connectDb();

app.use(cors());

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
