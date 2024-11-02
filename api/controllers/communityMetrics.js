const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({ firstName: String, lastName: String });
const engagementSummarySchema = new Schema({
  tester: {
    ref: "User",
    type: Schema.Types.ObjectId,
  },
  eligibleRequestsCount: Number,
  notifiedRequestsCount: Number,
  acceptedRequestsCount: Number,
  logins: Number,
  hoursWorked: Number,
  startDate: Date,
  endDate: Date,
});
const User = mongoose.model("User", userSchema);
const EngagementSummary = mongoose.model(
  "EngagementSummary",
  engagementSummarySchema,
  "testerEngagementSummaries"
);

module.exports = {
  index: async (req, res) => {
    const users = await User.find({});
    return res.json(users);
  },
};
