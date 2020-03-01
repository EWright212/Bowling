function Bowling() {}

Bowling.prototype.totalScore = function(scoreCard) {
  {
    let sum = 0;
    let splitScores = scoreCard.split('');
    for (let i = 0; i < splitScores.length; i++) {
      if(parseInt(splitScores[i]) >= 0) {
        sum += parseInt(splitScores[i]);
      } else if (splitScores[i] === "X") {
        sum += 10
      } else if (splitScores[i] === "/") {
        sum += (10 - parseInt(splitScores[i-1]))
      }
    }
    return sum;
};
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