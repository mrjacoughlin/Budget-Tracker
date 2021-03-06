const router = require("express").Router();
const Transaction = require("../models/transaction.js");
const Employee = require("../models/employee.js");

router.post("/api/transaction", ({ body }, res) => {
  Transaction.create(body)
    .then((dbTransaction) => {
      res.json(dbTransaction);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

router.post("/api/transaction/bulk", ({ body }, res) => {
  transactions.insertMany(body).then((dbTransactions) => {
    res.json(
      dbTransactions.catch((err) => {
        res.status(404).json(err);
      })
    );
  });
});

router.get("/api/transaction", (req, res) => {
  Transaction.find({})
    .sort({ date: -1 })
    .then((dbTransaction) => {
      res.json(dbTransaction);
    });
});
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
