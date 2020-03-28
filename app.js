var rollsSlider = document.getElementById("rolls");
var rollsOutput = document.getElementById("rollsValue");
rollsOutput.innerHTML = rollsSlider.value;

rollsSlider.oninput = function() {
  rollsOutput.innerHTML = this.value;
  calculateRolls();
}

var daysSlider = document.getElementById("days");
var daysOutput = document.getElementById("daysValue");
daysOutput.innerHTML = daysSlider.value;

daysSlider.oninput = function() {
  daysOutput.innerHTML = this.value;
  calculateRolls();
}

function calculateRolls() {

  const rolls = rollsSlider.value;
  const quarantineDays = daysSlider.value;

  const paperDays = rolls * 5; // A roll lasts 5 days
  const ratio = paperDays / quarantineDays * 100 ;

  const ratioDiv = document.getElementById('ratio');

  if (ratio > 500) {
    const emoji = "😄";
    ratioDiv.innerText = `${Math.round(ratio)}% ${emoji}`;
  } else if (ratio > 300) {
    const emoji = "😊";
    ratioDiv.innerText = `${Math.round(ratio)}% ${emoji}`;
  } else if (ratio > 200) {
    const emoji = "😐";
    ratioDiv.innerText = `${Math.round(ratio)}% ${emoji}`;
  } else if (ratio > 100) {
    const emoji = "😥";
    ratioDiv.innerText = `${Math.round(ratio)}% ${emoji}`;
  } else if (ratio > 80) {
    const emoji = "😫";
    ratioDiv.innerText = `${Math.round(ratio)}% ${emoji}`;
  }
  else {
    const emoji = "💩💩";
    ratioDiv.innerText = `${Math.round(ratio)}%  ${emoji}`;
  }
};
