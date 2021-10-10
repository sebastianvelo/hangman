import Button from "./Button";
import letters from "../../db/letters.js";

export interface ButtonsContainerProps {
    play: (letter: string) => void;
}

const ButtonsContainer = (props: ButtonsContainerProps) => {
    const element = document.createElement('div');
    element.setAttribute("id", "buttons-container");
    letters.forEach(letter => {
        element.appendChild(Button({
            text: letter,
            onClick: () => props.play(letter)
        }))
    });
    return element;
}

export default ButtonsContainer;