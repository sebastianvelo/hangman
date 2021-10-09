import Util from "../../util/Util";
import Button from "./Button";

export interface ButtonsContainerProps {
    play: (letter: string) => void;
}

const ButtonsContainer = (props: ButtonsContainerProps) => {
    const element = document.createElement('div');
    Util.LETTERS.forEach(letter => {
        element.appendChild(Button({
            text: letter,
            onClick: () => props.play(letter)
        }))
    });
    element.setAttribute("id", "buttons-container");
    return element;
}

export default ButtonsContainer;