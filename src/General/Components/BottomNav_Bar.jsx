import { useState, useEffect } from 'react'
import './BottomNav_Bar.css'
import useIsTouchDevice from '/src/hooks/useIsTouchDevice.jsx';


//imported images
import facebookLogoWhite from '../../assets/General/facebook logo white.svg'
import facebookLogoYellow from '../../assets/General/faceook logo yellow.svg'
import instagramLogoWhite from '../../assets/General/instagram logo white.svg'
import instagramLogoYellow from '../../assets/General/instagram logo yellow.svg'
import LinkUnderlined from './LinkUnderlined.jsx';

function Kontakt({normalIcon, activatedIcon, link, iconSize})
{
  const [curIcon, setCurIcon] = useState(normalIcon);
  const isTouch = useIsTouchDevice();

  const unActivateHover = () => {
    setTimeout(() => {
      setCurIcon(normalIcon);
    }, 200);

  }

  function handleMouseEnter() {
    setCurIcon(activatedIcon)
  } 

  // Handle hover leave event
  function handleMouseLeave() {
    setCurIcon(normalIcon);
  }

  function handleClick() {
      window.location.href = link;
  }

  return (
    <div 
      className='footer-kontakt'
      onClick={handleClick}
      onMouseEnter={!isTouch ? handleMouseEnter : undefined} 
      onMouseLeave={!isTouch ? handleMouseLeave : undefined} 
      onTouchStart={isTouch ? handleMouseEnter : undefined}
      onTouchEnd={isTouch ? unActivateHover: undefined}
      onTouchCancel={isTouch ? unActivateHover : undefined} 
    >
      <img src={curIcon} style={{width: iconSize}}/>
    </div>
  )
}

function Kontaktid()
{



  return (
    <div className='footer-kontaktid'>

      <Kontakt
        normalIcon={instagramLogoWhite}
        activatedIcon={instagramLogoYellow}
        link="https://www.instagram.com/liputoimkondade_liit/?utm_source=qr#"
        iconSize='36px'
      />

      <Kontakt
        normalIcon={facebookLogoWhite}
        activatedIcon={facebookLogoYellow}
        link="https://www.facebook.com/profile.php?id=61573531575459"
        iconSize='30px'
      />
    </div>
  )
}



export default function BottomNavigationBar() {


  return (
    <div className='footer' >


      <div className='footer-title'>
        Eesti Koolide Liputoimkondade Liit
      </div>

      {/*<div className='footer-meil'>
      <div className='normal-text-white'>Võta meiega ühendust: </div>
      <LinkUnderlined display="liputoimkondade.liit@gmail.com" normalColor='white'/>
      </div>*/} 

      
      
      
      
      <Kontaktid />

      <div className='footer-meil'>
        <LinkUnderlined display="Võta meiega ühendust: liputoimkondade.liit@gmail.com" normalColor='white'/>
      </div>



    </div>
  );
}
