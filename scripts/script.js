
console.log("script works fine;");

let bgMusic = new Audio("snd/Sp-music/bgm-001.mp3");
bgMusic.volume = 0.3;

document.querySelector("main").addEventListener("click", () =>
  {
    alert("lets play sm cool music!...");
    bgMusic.play();
  });
