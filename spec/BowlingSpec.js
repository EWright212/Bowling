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
  it("can handle a spare with a multiplier", function() {
    expect(bowling.totalScore('0/ 10 00 00 00 00 00 00 00 00')).toBe(12);
  });
  it("can handle a spare with another spare", function() {
    expect(bowling.totalScore('0/ 0/ 00 00 00 00 00 00 00 00')).toBe(20);
  });
  it("can handle a spare with another spare and multipliers", function() {
    expect(bowling.totalScore('0/ 1/ 10 00 00 00 00 00 00 00')).toBe(23);
  });
});

describe("Bowling strikes advanced functionality", function() {
  var bowling = new Bowling();
  it("can handle a strike with one multiplier", function() {
    expect(bowling.totalScore('X 10 00 00 00 00 00 00 00 00')).toBe(12);
  });
  it("can handle a strike with two multiplies", function() {
    expect(bowling.totalScore('X 11 00 00 00 00 00 00 00 00')).toBe(14);
  });
  it("can handle a strike with another strike", function() {
    expect(bowling.totalScore('X X 11 00 00 00 00 00 00 00')).toBe(35);
  });
});

describe("Bowling strikes and spare combined", function() {
  var bowling = new Bowling();
  it("can handle a strike with a spare", function() {
    expect(bowling.totalScore('X 1/ 00 00 00 00 00 00 00 00')).toBe(30);
  });
  it("can handle a spare with a strike", function() {
    expect(bowling.totalScore('0/ X 00 00 00 00 00 00 00 00')).toBe(30);
  });
});

describe("Final frame no bonus scored", function() {
  var bowling = new Bowling();
  it("works until bonus frames with max score", function () {
    expect(bowling.totalScore('X X X X X X X X X X00')).toBe(270);
  });
  it("can handle one X in final frame", function () {
    expect(bowling.totalScore('00 00 00 00 00 00 00 00 00 X00')).toBe(10);
  });
  it("can handle one X in each of final two frames", function () {
    expect(bowling.totalScore('00 00 00 00 00 00 00 00 X X00')).toBe(30);
  });
  it("can handle one X in each of final three frames", function () {
    expect(bowling.totalScore('00 00 00 00 00 00 00 X X X00')).toBe(60);
  });
  it("can handle a max score", function() {
    expect(bowling.totalScore('X X X X X X X X X XXX')).toBe(300);
  });
  it("can handle almost max score with zero in final roll", function() {
    expect(bowling.totalScore('X X X X X X X X X XX0')).toBe(290);
  });
  it("can handle almost max score with zero in final roll", function() {
    expect(bowling.totalScore('00 00 00 00 00 00 00 00 00 XX0')).toBe(20);
  });
});

describe("Final frame bonus scored", function() {
  var bowling = new Bowling();
  it("can handle strike then single rolls in bonus round", function () {
    expect(bowling.totalScore('00 00 00 00 00 00 00 00 0 X11')).toBe(12);
  });
  it("can handle strike then strike in bonus round", function () {
    expect(bowling.totalScore('00 00 00 00 00 00 00 00 00 XX0')).toBe(20);
  });
  it("can handle strike then strike in bonus round", function () {
    expect(bowling.totalScore('00 00 00 00 00 00 00 00 00 XXX')).toBe(30);
  });
  it("can handle spare in bonus round", function () {
    expect(bowling.totalScore('00 00 00 00 00 00 00 00 00 0/0')).toBe(10);
  });
  it("can handle spare with a bonus in bonus round", function () {
    expect(bowling.totalScore('00 00 00 00 00 00 00 00 00 0/1')).toBe(11);
  });
  it("can handle a two round spare with a bonus in bonus round", function () {
    expect(bowling.totalScore('00 00 00 00 00 00 00 00 00 3/1')).toBe(11);
  });
  it("can handle a spare in 9th round", function () {
    expect(bowling.totalScore('00 00 00 00 00 00 00 00 0/ 31')).toBe(17);
  });
  it("can handle a strike in 9th round", function () {
    expect(bowling.totalScore('00 00 00 00 00 00 00 00 X 31')).toBe(18);
  });
});

