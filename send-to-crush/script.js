const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const btnGroup = document.getElementById("btn-group");

let noButtonSize = 140;
// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "You are now my girlfriend.";
  gif.src =
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGI1cW5wMWhpaDF5b3pjdTF0OHZrcHJvaGkzOHJteDhmd245OGRnZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Vuw9m5wXviFIQ/giphy.gif";
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
  const groupRect = btnGroup.getBoundingClientRect();
  noButtonSize = Math.max(noButtonSize * 0.85, 40);
  noBtn.style.width = noButtonSize + "px";
  noBtn.style.height = (noButtonSize * 50) / 140 + "px";
  noBtn.style.fontSize = (noButtonSize / 140) * 1.3 + "em";

  // Calculate safe random position within btn-group
  const maxX = groupRect.width - noButtonSize - 10;
  const maxY = groupRect.height - (noButtonSize * 50) / 140 - 10;

  const randomX = Math.max(5, Math.floor(Math.random() * maxX));
  const randomY = Math.max(5, Math.floor(Math.random() * maxY));

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";

  if (noButtonSize <= 40) {
    question.innerHTML = "Come on, say Yes!";
    noBtn.style.display = "none";
  }
});
