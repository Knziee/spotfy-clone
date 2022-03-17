import './styles.css'

interface PropsLogo {
    LogoTheme: string;
}
function Logo(props: PropsLogo) {
return (
<img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt="new" className={props.LogoTheme}/>
)

}



export default Logo