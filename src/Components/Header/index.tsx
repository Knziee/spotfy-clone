import './styles.css';
import MenuItem from '../MenuItem';
import Logo from '../Logo'
import { Link } from 'react-router-dom';



function Header() {
    return (
    <nav className='header'>
<Logo LogoTheme='logoNavImg'/>
<ul className=''>

<MenuItem textMenu='Premium' MenuItemTheme='navBarMenu'/>

<Link to='/Sobre'><MenuItem textMenu='Suporte' MenuItemTheme='navBarMenu'/></Link>
<MenuItem textMenu='Baixar' MenuItemTheme='navBarMenu'/>
<MenuItem textMenu='|' MenuItemTheme='navBarDiv'/>
<MenuItem textMenu='Inscrever-se' MenuItemTheme='navBarMenu'/>
<MenuItem textMenu='Entrar' MenuItemTheme='navBarMenu'/>
</ul>

 </nav>
    )
}
export default Header