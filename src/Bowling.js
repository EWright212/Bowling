function Bowling() {}

Bowling.prototype.basicScore = function(scoreCard) {
  {
    let basicSum = 0;
    let splitScores = scoreCard.split('');
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

Bowling.prototype.spareMultiplier = function(scoreCard) {
  let multiplier = 0;
  let splitScores = scoreCard.split('');
  for (let i = 0; i < splitScores.length; i++) {
    if (splitScores[i] === "/") {
      multiplier += parseInt(splitScores[i+2])
    }
  }
  return multiplier
}

Bowling.prototype.totalScore = function(scoreCard) {
  var bowling = new Bowling();
  return (bowling.basicScore(scoreCard) + bowling.spareMultiplier(scoreCard));
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