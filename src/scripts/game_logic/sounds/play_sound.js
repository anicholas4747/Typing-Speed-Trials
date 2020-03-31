
export const playSound = () => {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioContext = new AudioContext();

  playSound();

  function playSound() {
    const source = audioContext.createBufferSource();
    source.buffer = window.soundChoice.buffer;

    const gainNode = audioContext.createGain();
    gainNode.gain.value = window.gameSounds.volume;

    source.connect(gainNode).connect(audioContext.destination);

    source.start(0);
  }
};