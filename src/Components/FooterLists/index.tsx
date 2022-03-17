import './styles.css';


interface PropsFooterLists {
    componentTheme: string;
    textList1: string;
    textList2: string;
    textList3: string;
    textList4: string;
    textList5: string;
    textList6: string;
}


function FooterLists(props: PropsFooterLists) {
    return (
<ul className='listFormat'>
    <li className='footerTitle'>{props.textList1}</li>
    <li className='.footerText'>{props.textList2}</li>
    <li className='.footerText'>{props.textList3}</li>
    <li className='.footerText'>{props.textList4}</li>
    <li className='.footerText'>{props.textList5}</li>
    <li className='.footerText'>{props.textList6}</li>
</ul>

)
}
export default FooterLists