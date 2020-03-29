export const changeSound = (e) => {
  const soundStr = e.target.value;
  if (soundStr) {
    // play the sound once then..
    window.soundChoice = soundStr;
  }
}