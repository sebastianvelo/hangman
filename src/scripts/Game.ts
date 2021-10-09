import GameUtils from "./game/GameUtils";
import words from "./db/words.js";
import Util from "./util/Util";

let attempts: number;
let chosenWord: string;
let progressWords: string[];

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

    if (attempts === GameUtils.MAX_ATTEMPTS) {
        alert('Perdiste 😨');
        reset();
        return;
    }

    if (progressWords.join('') === chosenWord) {
        alert('Ganaste 😃');
        reset();
        return;
    }
}

const reset = () => {
    ({ attempts, chosenWord, progressWords } = GameUtils.getInitalConfig(words));
    GameUtils.drawProgressWord(progressWords);
    GameUtils.drawHangman(0);
    Util.LETTERS.forEach(letter => document.getElementById(letter)?.removeAttribute("disabled"));
}

const init = () => {
    reset();
    GameUtils.drawButtons({ play });
}

export default init;