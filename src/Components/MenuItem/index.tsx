import './style.css';

interface PropsMenu {
    textMenu:string;
    MenuItemTheme: string;
}

function MenuItem(props: PropsMenu) {
    return (
<li className={props.MenuItemTheme}>{props.textMenu}</li>
    )
}

export default MenuItem

