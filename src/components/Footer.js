import './Footer.css'
import gt from '../images/social/github.png'
import fb from '../images/social/linkedin.png'
import gm from '../images/social/gmail.png'
import ig from '../images/social/instagram.png'
function Footer(){
    return (
        <>
        <div className='footer'>
            <p className='Title'>MixItUp</p>
            <p className='desc'>
            A project which let you decide your next meal belongs to Jatin Singh</p>
            <p className='copyright'>
            © copyright 2022
            </p>
            <div className='socialicons'>

<img className='img' src={gt} onClick={()=> window.open("https://github.com/Jasngh004", "_blank")}/>
<img className='img' src={gm} onClick={()=> window.open("mailto:jatin2002singh@gmail.com", "_blank")} />
<img className='img' src={ig} onClick={()=> window.open("https://instagram.com/cashlessjash", "_blank")}/>
<img className='img' src={fb} onClick={()=> window.open("https://www.linkedin.com/in/jatin-singh04/", "_blank")}/>

            </div>
        </div>
        </>
    )
}

export default Footer;