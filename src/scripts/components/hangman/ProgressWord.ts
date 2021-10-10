import ComponentUtil from "../ComponentUtil";

const ID = 'hangman-progress-word';

export interface ProgressWordProps {
    word: string;
}

const ProgressWord = (props: ProgressWordProps) => {
    let element = ComponentUtil.checkComponent(ID);
    if(!element){
        element = document.createElement('span');
        element.setAttribute("id", ID);
    }
    element.textContent = props.word;
    return element;
}

export default ProgressWord;