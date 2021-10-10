import HangmanDraw from "./HangmanDraw";
import ProgressWord from "./ProgressWord";

export interface HangmanWrapperProps {
    word: string;
    img: string;
}

const HangmanWrapper = (props: HangmanWrapperProps) => {
    const element = document.createElement('div');
    element.setAttribute("id", "hangman-wrapper");
    element.appendChild(ProgressWord({ ...props }))
    element.appendChild(HangmanDraw({ ...props }))
    return element;
}

export default HangmanWrapper;