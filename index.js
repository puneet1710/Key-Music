
var  x = {65:0,83:1,68:2,70:3,71:4,72:5}; 

window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3"
  ];

  pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubble(index);
    });
  });
document.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(e) {
	if (e.keyCode === 65 ||e.keyCode === 83 || e.keyCode === 68 || e.keyCode === 70 || e.keyCode === 71 || e.keyCode === 72) {
    const audio = document.querySelector(`#key-${x[e.keyCode]}`)
    audio.currentTime = 0;  
    audio.play();
    createBubble(x[e.keyCode]);
	}
}

  const createBubble = index => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = `jump 1s ease`;
    const val = 7 + (index) * 16.66;
    console.log(val);
    bubble.style.left = `${val}%`;
    bubble.addEventListener("animationend", function() {
      visual.removeChild(this);
    });
  };
});
