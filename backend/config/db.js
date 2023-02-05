// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI, () => {
//       console.log("DB Connected".bgYellow);
//     });

//     console.log(`MongoDB Connected: ${conn.connection.host}`.bgCyan.underline);
//   } catch (error) {
//     console.log(error);

//     process.exit(1);
//   }
// };

// module.exports = connectDB;

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.uri);

    console.log(`DB Connected: ${conn.connection.host}`.bgBlue);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
