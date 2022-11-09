const Birthdb = require("../model/birthSchema");

// create and save new user

// const createBirth = async (req, res) => {

//   try {
//     // new user
//     const user = await new Birthdb({
//       fname: req.body.fname,
//       mname: req.body.mname,
//       lname: req.body.lname,
//       fathername: req.body.fathername,
//       mothername: req.body.mothername,
//       gfather: req.body.gfather,
//       bdate: req.body.bdate,
//       bdistrict: req.body.bdistrict,
//       baddress: req.body.baddress,
//     });

//     // console.log(user);

//     const result = await user.save();

//     res.json(result);

//   } catch (error) {
//     res.send(error.message);
//   }
// };

// module.exports ={createBirth};

// create and save new user
exports.create = (req, res) => {
  // validate request

  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // create new user

  const user = new Birthdb({
    fname: req.body.fname,
    mname: req.body.mname,
    lname: req.body.lname,
    fathername: req.body.fathername,
    mothername: req.body.mothername,
    gfather: req.body.gfather,
    bdate: req.body.bdate,
    bdistrict: req.body.bdistrict,
    baddress: req.body.baddress,
  });

  // save user in the database
  user
    .save()
    .then((data) => {
      res.redirect("/birth-certificate/save");
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating a create operation",
      });
    });
};

// retrive and return all users and retrive and return a single user.

exports.find = (req, res) => {
  // get or read the data from the database

  const id = req.query.id;

  if (id) {
    Birthdb.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: `Not found user with id ${id}` });
        } else {
          console.log(data);
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: `Error retriving user with id ${id}`,
        });
      });
  } else {
    Birthdb.find() // retrive and return all the user information
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message ||
            " Error occurred while retriving the user information",
        });
      });
  }
};
