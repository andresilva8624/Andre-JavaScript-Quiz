var clearHighscore = document.querySelector("#clear-hs");




function highscore() {
  var highscore = JSON.parse(localStorage.getItem("highscore")) || [];
  highscore.sort(function (a, b) {
    return b.score - a.score;
  });
  for (var i = 0; i < highscore.length; i++) {
    var liEl = document.createElement("li");
    liEl.textContent = highscore[i].initials + " - " + highscore[i].score;
    document.querySelector(".order").appendChild(liEl);
  }
}
function clearScores(){
  localStorage.removeItem("highscore")
  window.location.reload();
}

highscore();


clearHighscore.addEventListener('click', clearScores);