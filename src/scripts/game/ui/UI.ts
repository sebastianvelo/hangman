import ButtonsContainer, { ButtonsContainerProps } from "../../components/buttons/ButtonContainer";
import HangmanDraw from "../../components/hangman/HangmanDraw";
import HangmanWrapper, { HangmanWrapperProps } from "../../components/hangman/HangmanWrapper";
import ProgressWord from "../../components/hangman/ProgressWord";
import letters from '../../db/letters.js';

class UI {
    private static CANVAS_ID: string = 'app';
    private static getCanvas = () => document.getElementById(UI.CANVAS_ID);
    private static getHangmanImage = (attempts: number) => `https://rewordify.com/images/hang${attempts}.gif`;

    static drawHangmanWrapper = (props: HangmanWrapperProps) => {
        UI.getCanvas().appendChild(HangmanWrapper(props))
    }

    static drawButtons = (props: ButtonsContainerProps) => {
        UI.getCanvas().appendChild(ButtonsContainer(props));
    }

    static initialDraw = (word: string, attempts: number, play: () => any) => {
        UI.drawHangmanWrapper({
            word,
            img: UI.getHangmanImage(attempts)
        });
        UI.drawButtons({ play });
    }

    static updateHangmanDraw = (img: string) => {
        HangmanDraw({ img });
    }
    
    static updateProgressWord = (word: string) => {
        ProgressWord({ word });
    }

    static updateDraw = (word: string, attempts: number) => {
        UI.updateProgressWord(word);
        UI.updateHangmanDraw(UI.getHangmanImage(attempts));
    }

    static disableButton = (letter: string) => {
        document.getElementById(letter).setAttribute("disabled", "disabled");
    }

    static enableButtons = () => {
        letters.forEach(letter => document.getElementById(letter)?.removeAttribute("disabled"));
    }
}

export default UI;