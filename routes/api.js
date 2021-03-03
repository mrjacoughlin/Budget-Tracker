const router = require("express").Router();
const Transaction = require("../models/transaction.js");

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
