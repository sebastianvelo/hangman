import ComponentUtil from "../ComponentUtil";

const ID = "hangman-draw";

export interface HangmanDrawProps {
    img: string;
}

const HangmanDraw = (props: HangmanDrawProps) => {
    let element = ComponentUtil.checkComponent(ID);
    if(!element) {
        element = document.createElement('img');
        element.setAttribute("id", ID);
        element.setAttribute("alt", "Hangman progress");
    }
    element.setAttribute("src", props.img);
    return element;
}

export default HangmanDraw;