interface ButtonProps {
    text: string;
    onClick: () => any;
}

const Button = (props: ButtonProps) => {
    const element = document.createElement('button');
    element.textContent = props.text;
    element.addEventListener("click", props.onClick);
    element.setAttribute("id", props.text);
    return element;
}

export default Button;