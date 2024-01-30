//Audio for jump
function playPlayerJump() {
  const playerJumpSound = document.getElementById("playerJump");
  playerJumpSound.play();
}

/*To Add Other Audio Functions:
  function soundFunction() {
    const soundVariable = document.getElementById("soundID");
    soundVariable.play();
  }
*/


//Export Sound
export default playPlayerJump