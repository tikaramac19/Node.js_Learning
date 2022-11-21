if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./server/Database/databaseConnect");

// signup model imports
const SignUp = require("./server/Models/SignupModel");
// Product model imports
const Product = require("./server/Models/ProductModel");

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
dotenv.config({ path: ".env" });

// connect to the database
connectDB();

app.get("/", (req, res) => {
  res.send("welcome to ecommerce project");
});

// Signup api
app.post("/register", async (req, res) => {
  let user = new SignUp(req.body);

  let result = await user.save();

  //   console.log(result);

  result = result.toObject();

  delete result.password; // it will remove the password while response

  res.send(result);
});

// signIn api
app.post("/login", async (req, res) => {
  //   console.log(req.body);

  if (req.body.password && req.body.email) {
    let user = await SignUp.findOne(req.body).select("-password");

    user ? res.send(user) : res.send({ result: "No user found" });
  } else {
    res.send({ result: "NO user found." });
  }
});

// Product Api's
app.post("/add-product", async (req,res)=>{
      let product = new Product(req.body);

      let productResult = await product.save();

      res.send(productResult);
});

app.listen(PORT, (req, res) => {
  console.log(`Server run at : http://localhost:${PORT}`);
});
