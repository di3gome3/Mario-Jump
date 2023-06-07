const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");


document.addEventListener("keydown", jump);

function jump() {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 600);
}

const loop = setInterval(() => {
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  const pipePosition = pipe.offsetLeft;

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 110) {
    pipe.style.animation = "none";
    pipe.style.left = pipePosition + "px";

    mario.style.animation = "none";
    mario.style.bottom = marioPosition + "px";

    mario.src = "./imagens/game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";

    clearInterval(loop);
  }
}, 10);
