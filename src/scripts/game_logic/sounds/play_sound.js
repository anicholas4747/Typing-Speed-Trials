
export const playSound = (delay) => {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioContext = new AudioContext();

  playSound(delay);
  console.log(delay)
  function playSound(delay) {
    delay = delay / 1000;

    const source = audioContext.createBufferSource();
    source.buffer = window.soundChoice.buffer;

    const gainNode = audioContext.createGain();
    gainNode.gain.value = window.gameSounds.volume;

    source.connect(gainNode).connect(audioContext.destination);

    source.start(delay);
  }
};