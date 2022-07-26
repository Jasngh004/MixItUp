import './Nav.css';

import { scroller } from "react-scroll";



 function Nav() {
    function scrollToHome () {
        document.getElementById('home').style.fontWeight = 700;
        document.getElementById('dining').style.fontWeight = 400;
        document.getElementById('Plate').style.fontWeight = 400;
        document.getElementById('about').style.fontWeight = 400;
         scroller.scrollTo('search-parent', {
           duration: 800,
           delay: 0,
           smooth: "easeInOutQuart",
         });
       };
       function scrollToPlate () {
         document.getElementById('home').style.fontWeight = 400;
         document.getElementById('dining').style.fontWeight = 400;
         document.getElementById('Plate').style.fontWeight = 700;
         document.getElementById('about').style.fontWeight = 400;
         scroller.scrollTo('xyz', {
           duration: 800,
           delay: 0,
           smooth: "easeInOutQuart",
         });
       };
       function scrollToDining () {
         document.getElementById('home').style.fontWeight = 400;
         document.getElementById('dining').style.fontWeight = 700;
         document.getElementById('Plate').style.fontWeight = 400;
         document.getElementById('about').style.fontWeight = 400;
         scroller.scrollTo('dining-parent', {
           duration: 800,
           delay: 0,
           smooth: "easeInOutQuart",
     
         });
       };
       function scrollToAbout () {
         document.getElementById('home').style.fontWeight = 400;
         document.getElementById('dining').style.fontWeight = 400;
         document.getElementById('Plate').style.fontWeight = 400;
         document.getElementById('about').style.fontWeight = 700;
         scroller.scrollTo('about', {
           duration: 800,
           delay: 0,
           smooth: "easeInOutQuart",
     
         });
       };
  return (
    <>
    
    <div class="nav">
  <input type="checkbox" id="nav-check"/>
  <div class="nav-header">
    <div class="nav-title">
    <img src="https://imgs.search.brave.com/Kh6hHBtVA_pVR1OmprYFtg0OGFvfdFwFMGWYMOPl-Xo/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5B/UUxhbzZ2cVFISTZF/TVh4c29TUG5nSGFI/YSZwaWQ9QXBp" className='navlogo'/>
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">

    
    <a onClick={ scrollToHome} className='navtext' id='home'>HOME</a>
    <a onClick={ scrollToDining} className='navtext' id='dining'>DINE NOW</a>
    <a onClick={scrollToPlate} className='navtext' id='Plate'>GRAB YOUR PLATES</a>
    <a onClick={scrollToAbout} className='navtext' id='about'>ABOUT US</a>
  </div>
</div>
     </>
  )
}

export default Nav