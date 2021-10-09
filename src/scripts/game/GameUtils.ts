import ButtonsContainer, { ButtonsContainerProps } from "../components/buttons/ButtonContainer";

namespace GameUtils {
    const getHangmanImage = (attempts: number) => `https://rewordify.com/images/hang${attempts}.gif`;
    
    const getRandomWord = (words: string[]): string => {
        const index = Math.floor(Math.random() * words.length);
        return words[index];
    }

    const getInitialPlaceholder = (word: string): string[] => {
        return Array(word.length).fill('_');
    }

    export const drawHangman = (attempts: number) => {
        document.getElementById("hangman-draw").setAttribute("src", getHangmanImage(attempts));
    }

    export const drawProgressWord = (word) => {
        document.getElementById("hangman-progress-words").innerHTML = word.join('');
    }

    export const drawButtons = (props: ButtonsContainerProps) => {
        document.getElementById("app").appendChild(ButtonsContainer(props));
    }

    export const getInitalConfig = (bank: string[]) => {
        const word = getRandomWord(bank);
        return ({
            attempts: 0,
            max_attempts: 6,
            chosenWord: word,
            progressWords: getInitialPlaceholder(word)
        })
    }

    export const MAX_ATTEMPTS = 6;
}

export default GameUtils;