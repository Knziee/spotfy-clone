import './styles.css'

interface PropsButon{
    text: string;
    theme: string;
}

function Button(props: PropsButon) {
    return (
        <button className={`button ${props.theme}`}> {props.text} </button>
    )
}
export default Button