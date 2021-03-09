const router = require("express").Router();
const Employee = require("../models/employee.js");

router.post("/api/employee", ({ body }, res) => {
  Employee.create(body)
    .then((dbEmployee) => {
      res.json(dbEmployee);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

router.post("/api/employee/bulk", ({ body }, res) => {
  employees.insertMany(body).then((dbEmployees) => {
    res.json(
      dbEmployees.catch((err) => {
        res.status(404).json(err);
      })
    );
  });
});

router.get("/api/employee", (req, res) => {
  Employee.find({})
    .sort({ date: -1 })
    .then((dbEmployee) => {
      res.json(dbEmployee);
    });
});

module.exports = router;
