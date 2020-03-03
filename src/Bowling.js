function Bowling() {}

Bowling.prototype.removeSpacesAndBonusFrame = function(scoreCard) {
let initialArray = scoreCard.split('')
let noSpaces = scoreCard.replace(/\s/g,'');
let splitSimpleScores = noSpaces.split('');
if (initialArray[initialArray.length - 3] =="X") {
  splitSimpleScores.pop()
  splitSimpleScores.pop()
}
return splitSimpleScores;
}

Bowling.prototype.removeSpaces = function(scoreCard) {
let noSpaces = scoreCard.replace(/\s/g,'');
let splitScores = noSpaces.split('');
return splitScores;
}

Bowling.prototype.basicScore = function(splitSimpleScores) {
  {
    let basicSum = 0;
    for (let i = 0; i < splitSimpleScores.length; i++) { 
      if (splitSimpleScores[i] === "X") {
        basicSum += 10
      } else if (splitSimpleScores[i] === "/") {
        basicSum += (10 - parseInt(splitSimpleScores[i-1]))
      } else {
        basicSum += parseInt(splitSimpleScores[i]);
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
        } else if (splitScores[i+j] == "X"){
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
      if (arrScoreCard[arrScoreCard.length -1] == "X") {
        reducer += 10;
      }
  }
  return reducer
}

Bowling.prototype.spareFinalFrame = function(scoreCard) {
  let arrScoreCard = scoreCard.split('');
  let reducer = 0
  if (arrScoreCard[arrScoreCard.length -2] == "/") {
    reducer += arrScoreCard[arrScoreCard.length -1];
  }
  return reducer
}

Bowling.prototype.totalScore = function(scoreCard) {
  var bowling = new Bowling();
  splitScores = bowling.removeSpaces(scoreCard);
  splitSimpleScores = bowling.removeSpacesAndBonusFrame(scoreCard);

  console.log("remove spaces: ");
  console.log(bowling.removeSpaces(scoreCard));
  console.log("basic score: ");
  console.log(bowling.basicScore(splitSimpleScores));
  console.log("spare multiplier: ");
  console.log(bowling.spareMultiplier(splitScores));
  console.log("strike multiplier: ");
  console.log(bowling.strikeMultiplier(splitScores));
  console.log("strike final frame: ");
  console.log(bowling.strikeFinalFrame(scoreCard));  
  
  return (bowling.basicScore(splitSimpleScores) + bowling.spareMultiplier(splitScores)+ bowling.strikeMultiplier(splitScores) - bowling.strikeFinalFrame(scoreCard) - bowling.spareFinalFrame(scoreCard));
}


