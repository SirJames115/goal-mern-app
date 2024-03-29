const express = require("express");
const colors = require("colors");
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");
require("dotenv").config();
const port = process.env.PORT || 8000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoute"));
app.use("/api/users", require("./routes/userRoute"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Sever running on port ${port}`);
});
