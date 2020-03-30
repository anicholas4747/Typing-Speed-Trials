export const loadSounds = () => {
  let songs = {
    click: "./src/media/sounds/click.mp3",
    hihat: "./src/media/sounds/hihat.mp3",
    bass: "./src/media/sounds/bass.mp3",
    water: "./src/media/sounds/water.mp3",
  };

  window.gameSounds = {};

  for (let s in songs) {
    loadSoundFX(s, songs[s]);
  }

  function loadSoundFX(soundStr, url) {
    let request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';
    
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContext();
    // Decode asynchronously
    request.onload = function () {
      audioContext.decodeAudioData(request.response, (buffer) => {
        window.gameSounds.volume = 2;
        window.gameSounds[soundStr] = buffer;
        window.soundChoice = {
          str: "click",
          buffer: window.gameSounds.click
        };
      });
    };
    request.send();
  }
};