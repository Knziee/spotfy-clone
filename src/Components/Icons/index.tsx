import './styles.css'

interface PropsIcon {
    iconLink: string;
    iconTheme: string;
}
function Icons(props: PropsIcon) {

return (
<div className='spaceBetweenIcons'>
    <div className='backgroundCircle'>
<img src={props.iconLink} alt="new" className={props.iconTheme}/>
</div>
</div>
)

}



export default Icons

