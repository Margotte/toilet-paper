function calculateRolls() {
  const rolls = event.target[0].value;
  const quarantineDays = event.target[1].value;

  const paperDays = rolls * 5; // A roll lasts 5 days

  const ratio = paperDays / quarantineDays * 100 ;
  console.log(ratio);

  const ratioDiv = document.getElementById('ratio');

  if (ratio > 100) {
    const emoji = "😄";
    ratioDiv.innerText = `${Math.round(ratio)}% ${emoji}`;
  } else {
    const emoji = "💩";
    ratioDiv.innerText = `${Math.round(ratio)}%  ${emoji}`;
  }

  event.preventDefault();
};

const form = document.getElementById('form');
form.addEventListener('submit', calculateRolls);
