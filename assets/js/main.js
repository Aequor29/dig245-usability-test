/* javascript */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let sum = 0;

    for (let i = 1; i <= 10; i++) {
      const value = parseInt(document.querySelector(`#q${i}`).value, 10);

      if (i % 2 === 0) {
        sum += 5 - value;
      } else {
        sum += value - 1;
      }
    }

    const susScore = sum * 2.5;

    // Display SUS score in the dedicated component
    const scoreDisplay = document.getElementById("sus-score-display");
    scoreDisplay.innerHTML = `<strong>Your SUS score is: ${susScore}</strong>`;
  });
});
