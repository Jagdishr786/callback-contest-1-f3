function OpeningCeremony(sportsObj, callbackFnc) {
    console.log("Let the games begin");
    setTimeout(() => {
      sportsObj = {red: 0, blue: 0, green: 0, yellow: 0};
      console.log("Initial Scores: ", sportsObj);
      Race100M(sportsObj, callbackFnc);
    }, 1000);
  }
  
  function Race100M(sportsObj, callbackFnc) {
    console.log("Race 100M begins!");
    setTimeout(() => {
      const redTime = Math.floor(Math.random() * 6) + 10; // generating random time for red between 10-15 seconds
      const blueTime = Math.floor(Math.random() * 6) + 10; // generating random time for blue between 10-15 seconds
      const greenTime = Math.floor(Math.random() * 6) + 10; // generating random time for green between 10-15 seconds
      const yellowTime = Math.floor(Math.random() * 6) + 10; // generating random time for yellow between 10-15 seconds
      const times = {red: redTime, blue: blueTime, green: greenTime, yellow: yellowTime};
      console.log("Race 100M results: ", times);
      const sortedTimes = Object.keys(times).sort((a, b) => times[a] - times[b]); // sorting by time
      const winner = sortedTimes[0];
      const runnerUp = sortedTimes[1];
      sportsObj[winner] += 50;
      sportsObj[runnerUp] += 25;
      console.log(`Race 100M winners: ${winner} (50 points), ${runnerUp} (25 points)`);
      console.log("Updated Scores: ", sportsObj);
      callbackFnc(sportsObj, LongJump);
    }, 3000);
  }
  
  function LongJump(sportsObj, callbackFnc) {
    console.log("Long Jump begins!");
    setTimeout(() => {
      const color = ["red", "blue", "green", "yellow"][Math.floor(Math.random() * 4)]; // randomly selecting a color
      sportsObj[color] += 150;
      console.log(`Long Jump winner: ${color} (150 points)`);
      console.log("Updated Scores: ", sportsObj);
      callbackFnc(sportsObj, HighJump);
    }, 2000);
  }
  
  function HighJump(sportsObj, callbackFnc) {
    console.log("High Jump begins!");
    const answer = prompt("Which color secured the highest jump?");
    if (answer && sportsObj.hasOwnProperty(answer.toLowerCase())) {
      sportsObj[answer.toLowerCase()] += 100;
      console.log(`High Jump winner: ${answer.toLowerCase()} (100 points)`);
    } else if (answer === null) {
      console.log("Event was cancelled");
    } else {
      console.log("Invalid answer");
    }
    console.log("Updated Scores: ", sportsObj);
    callbackFnc(sportsObj, AwardCeremony);
  }
  
  function AwardCeremony(sportsObj) {
    console.log("Award Ceremony begins!");
    console.log(`Yellow came first with ${sportsObj.yellow} points`);
    console.log(`Red came second with ${sportsObj.red} points`);
    console.log(`Green came third with ${sportsObj.green} points`);
  }
  
  // Callback Hell
  OpeningCeremony({}, function(scoreObj, nextCallback) {
    nextCallback(scoreObj, function(scoreObj, nextCallback) {
      nextCallback(scoreObj, function(scoreObj, nextCallback) {
        nextCallback
      })})})
  