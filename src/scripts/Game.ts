import GameUtils from "./game/GameUtils";
import words from "./db/words.js";

let attempts, chosenWord, progressWords;

const play = (userLetter) => {
    let found;
    chosenWord.split('').forEach((letter, i) => {
        if (letter === userLetter) {
            progressWords[i] = letter;
            found = true;
        }
    })
    if (!found)
        attempts++;

    GameUtils.drawProgressWord(progressWords);
    GameUtils.drawHangman(attempts);
    document.getElementById(userLetter).setAttribute("disabled", "disabled");
}

const init = () => {
    ({ attempts, chosenWord, progressWords } = GameUtils.getInitalConfig(words));
    GameUtils.drawProgressWord(progressWords);
    GameUtils.drawHangman(0);
    GameUtils.drawButtons({play});
}

export default init;