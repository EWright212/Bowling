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
      if(parseInt(splitScores[i]) >= 0) {
        basicSum += parseInt(splitScores[i]);
      } else if (splitScores[i] === "X") {
        basicSum += 10
      } else if (splitScores[i] === "/") {
        basicSum += (10 - parseInt(splitScores[i-1]))
      }
    }
    return basicSum;
};
}

Bowling.prototype.spareMultiplier = function(splitScores) {
  let multiplier = 0;
  for (let i = 0; i < splitScores.length; i++) {
    if (splitScores[i] === "/") {
      multiplier += parseInt(splitScores[i+1])
    }
  }
  return multiplier
}

Bowling.prototype.strikeMultiplier = function(splitScores) {
  let multiplier = 0;
  for (let i = 0; i < splitScores.length; i++) {
    if (splitScores[i] === "X") {
      multiplier += parseInt(splitScores[i+1])
      multiplier += parseInt(splitScores[i+2])
    }
  }
  return multiplier
}

Bowling.prototype.totalScore = function(scoreCard) {
  var bowling = new Bowling();
  splitScores = bowling.removeSpaces(scoreCard)
  return (bowling.basicScore(splitScores) + bowling.spareMultiplier(splitScores)+ bowling.strikeMultiplier(splitScores));
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