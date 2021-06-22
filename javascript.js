var count = 0;

function onClick() {
  //roll the boulder up on click and hold
   document.getElementById("rock").className = "boulder-on-click";
}

function unClick() {
  //If the boulder reaches the top of the mountain then it should bounce and roll
  if (document.getElementById("rock").offsetTop == 172) {
 document.getElementById("rock").className = "boulder-let-go";
    count++;
} else {
  //If the boulder does not reach the top, it should only roll back to the bottom
  document.getElementById("rock").className = "boulder-roll-back";
}
}
