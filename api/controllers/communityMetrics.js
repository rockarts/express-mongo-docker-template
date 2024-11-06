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
  stats: async (req, res) => {
    const users = await User.find();
    const engagementSummary = await EngagementSummary.find();

    const ninetyDaysAgo = new Date(new Date().setDate(new Date().getDate() - 90));  
    const sixtyDaysAgo = new Date(new Date().setDate(new Date().getDate() - 60));  

    const activeUsersCount = await User.countDocuments({
        $expr: {
            $gte: [
                { $toDate: "$lastLogin" },  // Convert string to date
                ninetyDaysAgo
            ]
        }
    });

    const count = await User.countDocuments();
    const activeTestersPercentage = Math.floor((activeUsersCount / count) * 100);
    


    const engagedTesters = await EngagementSummary.aggregate([
      // Match documents within date range
      {
          $match: {
              startDate: { $gte: sixtyDaysAgo }
          }
      },
      // Group by tester and sum their hours
      {
          $group: {
              _id: "$tester",
              totalHours: { $sum: "$hoursWorked" }
          }
      },
      // Filter for those who worked more than 3 hours
      {
          $match: {
              totalHours: { $gt: 3 }
          }
      }
  ]);
  const engagedTestersPercentage = Math.floor((engagedTesters.length / count) * 100);

    const stats = {
      percentageOfActiveTesters: activeTestersPercentage,
      percentageOfEngagedTesters: engagedTestersPercentage
    };

    return res.json(stats);
  },
  index: async (req, res) => {
    const users = await User.find({});
    
    const grouped = await EngagementSummary.aggregate( [ { 
      $group : { _id : "$tester", 
      totalHoursWorked: { $sum: "$hoursWorked"   }
     } } ] )
    console.log(grouped);
   

    const groupedTesters = users.map( user => {

        let total = grouped.find(tester => {
          return tester._id.equals(user._id)
        })
        console.log(total);
        user = user.toObject();
        user.totalHours = Math.round(total.totalHoursWorked);
        return user
      }
    )
    console.log(groupedTesters);
    return res.json(groupedTesters);
  },
};
