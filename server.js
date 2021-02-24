const { Mongoose } = require("mongoose");

Mongoose.connect("mongodb://localhost/OfflineBudget", {
  useNewUrlParse: true,
  useFindAndModify: false,
});

app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
