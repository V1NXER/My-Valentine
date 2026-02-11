const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const surprise = document.getElementById("surprise");
const mainImage = document.getElementById("mainImage");
const mainTitle = document.getElementById("mainTitle");
const mainText = document.getElementById("mainText");
const buttons = document.querySelector(".buttons");

// 1. Define the 5 Phases (Looping)
// REPLACE these image paths with your own cat images if you want!
const phases = [
  {
    text: "Are you sure? 🥺",
    img: "assets/standing-kitty.gif", // Phase 1: Begging
    btnText: "No...?",
  },
  {
    text: "Please think again! I'll be so sad... 😭",
    img: "assets/1fa57dce70f734724ca4ae4633037677.jpg", // Phase 2: Crying
    btnText: "Still No",
  },
  {
    text: "But we are perfect together! Look at this face! 💔",
    img: "assets/cat-standing-up-crying-v0-dtmdh6nbxsx81.webp", // Phase 3: Very Sad
    btnText: "Don't care",
  },
  {
    text: "I'll give you massagesss and coffee everyday! ☕💆‍♂️",
    img: "assets/21042210_264995290674140_8840525631411191808_n-530848c0d1134a31bc03861ea9ddd700.jpg", // Phase 4: Bargaining
    btnText: "Hmmm...",
  },
  {
    text: "Okay fine... click YES or I will cry forever. 🌊",
    img: "assets/tuCu6BT-.jpg", // Phase 5: Drama
    btnText: "Fine, Yes!",
  },
];

let phaseIndex = 0;

// 2. Handle NO Click (Loops through phases)
noBtn.addEventListener("click", () => {
  // Get current phase data
  const currentPhase = phases[phaseIndex];

  // Update the DOM elements
  mainText.innerHTML = currentPhase.text;
  mainImage.src = currentPhase.img;
  noBtn.textContent = currentPhase.btnText;

  // Increment index, loop back to 0 if at the end
  phaseIndex = (phaseIndex + 1) % phases.length;
});

// 3. Handle YES Click (Shows the final letter)
yesBtn.addEventListener("click", () => {
  // Hide the initial content
  mainImage.style.display = "none";
  mainTitle.style.display = "none";
  mainText.style.display = "none";
  buttons.style.display = "none";

  // Show the surprise div
  surprise.classList.remove("hidden");
});

