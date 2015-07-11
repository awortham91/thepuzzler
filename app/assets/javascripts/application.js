// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require_tree .


$(function(){ $(document).foundation(); });
var ones = document.getElementsByClassName("oneslot");
var twos = document.getElementsByClassName("twoslot");
var threes = document.getElementsByClassName("threeslot");
var fours = document.getElementsByClassName("fourslot");
var fives = document.getElementsByClassName("fiveslot");

var puzzle = [1, 1, 1, 1, 1]

color();

function checkForWin() {
  var winner = 0
  for (i = 0; i < puzzle.length; i++) {
    if (puzzle[i] === 3) {
      winner ++;
    }
  };
  if (winner === 5) {
    document.getElementById("one").disabled = true;
    document.getElementById("two").disabled = true;
    document.getElementById("three").disabled = true;
    document.getElementById("four").disabled = true;
    document.getElementById("five").disabled = true;
    document.getElementById("reset").disabled = true;
    document.getElementById("next").style.display = "block";
  };
};

function color() {
  ones[flipflop(puzzle[0])-1].style.backgroundColor = "red";
  $(ones[flipflop(puzzle[0])-1]).fadeTo(250, 1);
  twos[flipflop(puzzle[1])-1].style.backgroundColor = "red";
  $(twos[flipflop(puzzle[1])-1]).fadeTo(250, 1);
  threes[flipflop(puzzle[2])-1].style.backgroundColor = "red";
  $(threes[flipflop(puzzle[2])-1]).fadeTo(250, 1);
  fours[flipflop(puzzle[3])-1].style.backgroundColor = "red";
  $(fours[flipflop(puzzle[3])-1]).fadeTo(250, 1);
  fives[flipflop(puzzle[4])-1].style.backgroundColor = "red";
  $(fives[flipflop(puzzle[4])-1]).fadeTo(250, 1);
};

function colorback() {
  ones[flipflop(puzzle[0])-1].style.backgroundColor = "green";
  $(ones[flipflop(puzzle[0])-1]).fadeTo(250, 0.8);
  twos[flipflop(puzzle[1])-1].style.backgroundColor = "green";
  $(twos[flipflop(puzzle[1])-1]).fadeTo(250, 0.8);
  threes[flipflop(puzzle[2])-1].style.backgroundColor = "green";
  $(threes[flipflop(puzzle[2])-1]).fadeTo(250, 0.8);
  fours[flipflop(puzzle[3])-1].style.backgroundColor = "green";
  $(fours[flipflop(puzzle[3])-1]).fadeTo(250, 0.8);
  fives[flipflop(puzzle[4])-1].style.backgroundColor = "green";
  $(fives[flipflop(puzzle[4])-1]).fadeTo(250, 0.8);
};

function flipflop(num) {
  var x;
  if (num === 5) {
    x = 1
  }
  if (num === 1) {
    x = 5
  };
  if (num === 3) {
    x = 3
  }
  if (num === 4) {
    x = 2
  }
  if (num === 2) {
    x = 4
  };
  return x
};

function check() {
  var index;
  for (index = 0; index < puzzle.length; ++index) {
    if (puzzle[index] > 5) {
      puzzle[index] = 5
    };
    if (puzzle[index] < 1) {
      puzzle[index] = 1
    };
  };
  color();
  checkForWin();
};

function reseters() {
  colorback();
  puzzle = [1, 1, 1, 1, 1]
  color();
};

document.getElementById("one").onclick = function() {
    colorback()
  puzzle[0] = puzzle[0]+2
  puzzle[1] = puzzle[1]-1
  puzzle[2] = puzzle[2]-1
  puzzle[3] = puzzle[3]-1
  puzzle[4] = puzzle[4]+1
  check()
  console.log(puzzle)
};

document.getElementById("two").onclick = function() {
    colorback()
  puzzle[0] = puzzle[0]-2
  puzzle[1] = puzzle[1]
  puzzle[2] = puzzle[2]+2
  puzzle[3] = puzzle[3]+3
  puzzle[4] = puzzle[4]-1
  check()
  console.log(puzzle)
};

document.getElementById("three").onclick = function() {
    colorback()
  puzzle[0] = puzzle[0]-2
  puzzle[1] = puzzle[1]+4
  puzzle[2] = puzzle[2]-3
  puzzle[3] = puzzle[3]
  puzzle[4] = puzzle[4]
  check()
  console.log(puzzle)
};

document.getElementById("four").onclick = function() {
    colorback()
  puzzle[0] = puzzle[0]-1
  puzzle[1] = puzzle[1]
  puzzle[2] = puzzle[2]+2
  puzzle[3] = puzzle[3]+2
  puzzle[4] = puzzle[4]+1
  check()
  console.log(puzzle)
};

document.getElementById("five").onclick = function() {
    colorback()
  puzzle[0] = puzzle[0]+1
  puzzle[1] = puzzle[1]-1
  puzzle[2] = puzzle[2]
  puzzle[3] = puzzle[3]-2
  puzzle[4] = puzzle[4]
  check()
  console.log(puzzle)
};

document.getElementById("reset").onclick = function() {
  reseters();
};


// The answer is 2233145
