'use strict';

describe("Bowling basic functionality", function() {
  var bowling = new Bowling();
  it("sums the total frames, zero score game", function() {
    expect(bowling.totalScore('00 00 00 00 00 00 00 00 00 00')).toBe(0);
  });
  it("sums the total frames, one score game", function() {
    expect(bowling.totalScore('10 00 00 00 00 00 00 00 00 00')).toBe(1);
  });
  it("sums the total frames, two score game", function() {
    expect(bowling.totalScore('11 00 00 00 00 00 00 00 00 00')).toBe(2);
  });
  it("sums the total frames, all ones score game", function() {
    expect(bowling.totalScore('11 11 11 11 11 11 11 11 11 11')).toBe(20);
  });
  it("can handle one spare with no bonus", function() {
    expect(bowling.totalScore('0/ 00 00 00 00 00 00 00 00 00')).toBe(10);
  });
  it("can handle one strike with no bonus", function() {
    expect(bowling.totalScore('X 00 00 00 00 00 00 00 00 00')).toBe(10);
  });
});

describe("Bowling spares advanced functionality", function() {
  var bowling = new Bowling();
  it("can handle a spare with a non zero roll before it", function() {
    expect(bowling.totalScore('1/ 00 00 00 00 00 00 00 00 00')).toBe(10);
  });
  // it("can handle a spare with a multiplier", function() {
  //   expect(bowling.totalScore('0/ 10 00 00 00 00 00 00 00 00')).toBe(12);
  // });
});
// describe("Player", function() {
//   var player;
//   var song;

//   beforeEach(function() {
//     player = new Player();
//     song = new Song();
//   });

//   it("should be able to play a Song", function() {
//     player.play(song);
//     expect(player.currentlyPlayingSong).toEqual(song);

//     //demonstrates use of custom matcher
//     expect(player).toBePlaying(song);
//   });

//   describe("when song has been paused", function() {
//     beforeEach(function() {
//       player.play(song);
//       player.pause();
//     });

//     it("should indicate that the song is currently paused", function() {
//       expect(player.isPlaying).toBeFalsy();

//       // demonstrates use of 'not' with a custom matcher
//       expect(player).not.toBePlaying(song);
//     });

//     it("should be possible to resume", function() {
//       player.resume();
//       expect(player.isPlaying).toBeTruthy();
//       expect(player.currentlyPlayingSong).toEqual(song);
//     });
//   });

//   // demonstrates use of spies to intercept and test method calls
//   it("tells the current song if the user has made it a favorite", function() {
//     spyOn(song, 'persistFavoriteStatus');

//     player.play(song);
//     player.makeFavorite();

//     expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
//   });

//   //demonstrates use of expected exceptions
//   describe("#resume", function() {
//     it("should throw an exception if song is already playing", function() {
//       player.play(song);

//       expect(function() {
//         player.resume();
//       }).toThrowError("song is already playing");
//     });
//   });
// });
