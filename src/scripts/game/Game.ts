import words from "../db/words.js";
import UI from "./ui/UI";

class Game {
    private attempts: number;
    private chosenWord: string;
    private progressWord: string[];
    private static MAX_ATTEMPTS = 6;

    public init() {
        this.initialConfig();
        UI.initialDraw(this.getProgressWord(), this.attempts, this.play.bind(this));
    }

    public play = (userLetter) => {
        let found = false;
        this.chosenWord.split('').forEach((letter, i) => {
            if (letter === userLetter) {
                this.progressWord[i] = letter;
                found = true;
            }
        })
        if (!found)
            this.attempts++;

        UI.updateDraw(this.getProgressWord(), this.attempts);
        UI.disableButton(userLetter);

        if (this.attempts === Game.MAX_ATTEMPTS) {
            alert(`You lost 😨 The word was ${this.chosenWord}`);
            this.reset();
            return;
        }

        if (this.getProgressWord() === this.chosenWord) {
            alert(`You win! 🥳 The word was ${this.chosenWord}`);
            this.reset();
            return;
        }
    }

    //Manage game state
    private reset = () => {
        this.initialConfig();
        UI.updateDraw(this.getProgressWord(), this.attempts);
        UI.enableButtons();
    }

    private initialConfig = () => {
        const word = this.getRandomWord(words);
        this.attempts = 0;
        this.chosenWord = word;
        this.progressWord = this.getInitialPlaceholder(word);
    }

    private getProgressWord = () => {
        return this.progressWord.join('');
    }

    //Words
    private getRandomWord = (words: string[]): string => {
        const index = Math.floor(Math.random() * words.length);
        return words[index];
    }
    private getInitialPlaceholder = (word: string): string[] => {
        return Array(word.length).fill('_');
    }


}

export default Game;