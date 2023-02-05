// const express = require("express");
// const router = express.Router();
// const {
//   getGoals,
//   setGoal,
//   updateGoal,
//   deleteGoal,
// } = require("../controllers/goalController");

// router.route("/").get(getGoals).post(setGoal);
// router.route("/:id").put(updateGoal).delete(deleteGoal);

// module.exports = router;

//

//

const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updadtedGoal,
  deleteGoal,
} = require("../controllers/goalController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getGoals).post(protect, setGoal);
router.route("/:id").put(protect, updadtedGoal).delete(protect, deleteGoal);

module.exports = router;
