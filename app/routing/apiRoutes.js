
var friendData = require("../data/friends.js");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });


  app.post("/api/friends", function(req, res) {
   var userInput = req.body;
    
    console.log(userInput)

    compatible(userInput, friendData, res);

  });

  var compatible = function(userInput, friendData, res) {
    console.log("compatibility run");
    var bestMatchName = ""
    var bestMatchIndex = 0
    var total_diff_old = 0
    
    for (var i = 0; i < friendData.length; i++){
        var total_diff_new = 0
        console.log(friendData[i].scores)
        for (var j = 0; j < friendData[i].scores.length; j++) {
            total_diff_new += Math.abs(friendData[i].scores[j] - userInput.eating)
            console.log("total_diff " + total_diff_new)
        }
        if (total_diff_new < total_diff_old  || total_diff_old == 0) {
            bestMatchName = friendData[i].name
            bestMatchIndex = i
        }
        total_diff_old = total_diff_new
    }
    console.log(friendData[bestMatchIndex])
    res.send(friendData[bestMatchIndex])
  }

};
