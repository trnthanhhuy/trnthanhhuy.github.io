const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause');
const progress = document.getElementById('progress');
const currentTime = document.getElementById('current-time');
const duration = document.getElementById('duration');

audio.onloadedmetadata = () => {
  duration.textContent = formatTime(audio.duration);
};

audio.ontimeupdate = () => {
  currentTime.textContent = formatTime(audio.currentTime);
  progress.value = (audio.currentTime / audio.duration) * 100;
};

progress.oninput = () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
};

playPauseBtn.onclick = () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = '⏸️';
  } else {
    audio.pause();
    playPauseBtn.textContent = '▶️';
  }
};

function formatTime(t) {
  const min = Math.floor(t / 60);
  const sec = Math.floor(t % 60).toString().padStart(2, '0');
  return `${min}:${sec}`;
}
