//Audio when Goomba Dies
function playGoombaDeath() {
  const goombaDeathSound = document.getElementById("goombaDeath");
  goombaDeathSound.play();
}

//Audio when jumping
function playJump() {
  const PlayerJumpSound = document.getElementById("PlayerJump");
  PlayerJumpSound.play();
}

//Audio when player Dies
function playPlayerDeath() {
  const playerDeathSound = document.getElementById("PlayerDeath");
  playerDeathSound.play();
}

//Audio when stepping on Mushroom
function mushroomSound() {
  const mushroomSound = document.getElementById("Mushroom");
  mushroomSound.play();
}

/*To Add Other Audio Functions:
  function soundFunction() {
    const soundVariable = document.getElementById("soundID");
    soundVariable.play();
  }
*/


//Export Sound
export default {
  playGoombaDeath: () => { playGoombaDeath() },
  playJump: () => { playJump() },
  playPlayerDeath: () => { playPlayerDeath() },
  mushroomSound: () => { mushroomSound() },
}