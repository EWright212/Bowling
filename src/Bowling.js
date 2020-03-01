function Bowling() {}

Bowling.prototype.removeSpaces = function(scoreCard) {
let noSpaces = scoreCard.replace(/\s/g,'');
let splitScores = noSpaces.split('');
return splitScores;
}

Bowling.prototype.basicScore = function(splitScores) {
  {
    let basicSum = 0;
    for (let i = 0; i < splitScores.length; i++) { 
      if (splitScores[i] === "X") {
        basicSum += 10
      } else if (splitScores[i] === "/") {
        basicSum += (10 - parseInt(splitScores[i-1]))
      } else {
        basicSum += parseInt(splitScores[i]);
      }
    }
    return basicSum;
};
}

Bowling.prototype.spareMultiplier = function(splitScores) {
  let multiplier = 0;
  for (let i = 0; i < splitScores.length; i++) {
    if (splitScores[i] === "/") {
      if (splitScores[i+1] >=0) {
        multiplier += parseInt(splitScores[i+1])
      } else {
        multiplier += 10
      }
    }
  }
  return multiplier
}

Bowling.prototype.strikeMultiplier = function(splitScores) {
  let multiplier = 0;
  for (let i = 0; i < splitScores.length; i++) {
    if (splitScores[i] === "X") {
      for (let j = 1; j < 3; j++) {
        if (parseInt(splitScores[i+j]) >= 0) {
          multiplier += parseInt(splitScores[i+j]);
        } else if (splitScores[i+j] == "/") {
          multiplier += (10 - parseInt(splitScores[i+j-1]));
        } else {
          multiplier +=10;
        }
      }
    }
  }
  return multiplier
}

Bowling.prototype.strikeFinalFrame = function(scoreCard) {
  let arrScoreCard = scoreCard.split('');
  let reducer = 0
  if (arrScoreCard[arrScoreCard.length -3] == "X") {
    for (let i = 1; i < 3; i++) {
      if (parseInt(arrScoreCard[arrScoreCard.length -i]) >= 0) {
        reducer += parseInt(arrScoreCard[arrScoreCard.length -i]);
      } else if (arrScoreCard[arrScoreCard.length -i] == "X") {
        reducer += 10;
      }
    }
  }
  return reducer
}

Bowling.prototype.totalScore = function(scoreCard) {
  var bowling = new Bowling();
  splitScores = bowling.removeSpaces(scoreCard)
  return (bowling.basicScore(splitScores) + bowling.spareMultiplier(splitScores)+ bowling.strikeMultiplier(splitScores) - bowling.strikeFinalFrame(scoreCard));
}


// function Player() {
// }
// Player.prototype.play = function(song) {
//   this.currentlyPlayingSong = song;
//   this.isPlaying = true;
// };

// Player.prototype.pause = function() {
//   this.isPlaying = false;
// };

// Player.prototype.resume = function() {
//   if (this.isPlaying) {
//     throw new Error("song is already playing");
//   }

//   this.isPlaying = true;
// };

// Player.prototype.makeFavorite = function() {
//   this.currentlyPlayingSong.persistFavoriteStatus(true);
// };