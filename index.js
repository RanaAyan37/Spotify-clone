console.log("Welcome to Spotify");
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let progressbox = document.querySelector("#progress");
let next = document.querySelector("#next");
let previous = document.querySelector("#previous");
let gif = document.querySelector("#gif");
let songtitle = document.querySelector("#name");
let songs = [
  {
    id: 1,
    songName: "Warriyo - Mortals [NCS Release]",
    filePath: "songs/1.mp3",
  },
  { id: 2, songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3" },
  {
    id: 3,
    songName: "Different Heaven & EH!DE - My Heart [NCS Release]",
    filePath: "songs/3.mp3",
  },
  {
    id: 4,
    songName: "DEAF KEV - Invincible [NCS Release]-320k",
    filePath: "songs/4.mp3",
  },
  {
    id: 5,
    songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release",
    filePath: "songs/5.mp3",
  },
  { id: 6, songName: "Rabba - Salam-e-Ishq", filePath: "songs/6.mp3" },
  { id: 7, songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/7.mp3" },
  { id: 8, songName: "Cielo - Huma-Huma ", filePath: "songs/8.mp3" },
];
let songIndex = 0;

let listsongs = document.querySelectorAll(".song");
listsongs.forEach((element, index) => {
  element.addEventListener("click", () => {
    songIndex = index;
    audioElement.src = `songs/${songIndex + 1}.mp3`; // Adjusted index to start from 1
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    songtitle.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = "1";
  });
});
next.addEventListener("click", () => {
  if (songIndex >= 7) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`; // Adjusted index to start from 1
  masterPlay.classList.remove("fa-play-circle");
  gif.style.opacity = "1";
  songtitle.innerText = songs[songIndex].songName;
  masterPlay.classList.add("fa-pause-circle");
  audioElement.currentTime = 0;
  audioElement.play();
});
previous.addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`; // Adjusted index to start from 1
  masterPlay.classList.remove("fa-play-circle");
  gif.style.opacity = "1";
  songtitle.innerText = songs[songIndex].songName;
  masterPlay.classList.add("fa-pause-circle");
  audioElement.currentTime = 0;
  audioElement.play();
});
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = "1";
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = "0";
  }
});

audioElement.addEventListener("timeupdate", () => {
  console.log("time update");
  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  progressbox.value = progress;
});

progressbox.addEventListener("change", () => {
  audioElement.currentTime = (progressbox.value * audioElement.duration) / 100;
});
