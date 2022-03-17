import './styles.css';
import Logo from '../Logo';
import FooterLists from '../FooterLists'
import Icons from '../Icons'
import FooterSmallInfos from '../FooterSmallInfos'

function Footer() {
    return (
        <footer className='footerBack'>
            <Logo LogoTheme='logoFootImg'/>
            <div className='footerContentList'>
            <FooterLists componentTheme='a' textList1='empresa'  textList2='Sobre'  textList3='Empregos' textList4='For the Record'/>
            <FooterLists componentTheme='a' textList1='Comunidades'  textList2='Para Artistas'  textList3='Desenvolvedores' textList4='Publicidade' textList5='Investidores' textList6='Fornecedores'/>
            <FooterLists componentTheme='a' textList1='links úteis'  textList2='Suporte'  textList3='Player da Web' textList4='Aplicativo móvel grátis'/>
            </div>
            <icons className='iconsContent'>
                <Icons iconLink='https://cdn.icon-icons.com/icons2/2248/PNG/512/instagram_icon_138461.png' iconTheme='iconThemeStyle'/>
                <Icons iconLink='https://cdn-icons-png.flaticon.com/512/81/81609.png' iconTheme='iconThemeStyle'/>
                <Icons iconLink='https://cdn-icons-png.flaticon.com/512/59/59439.png' iconTheme='iconThemeStyle'/>
            </icons>
            <FooterSmallInfos />
        </footer>

)
}
export default Footer