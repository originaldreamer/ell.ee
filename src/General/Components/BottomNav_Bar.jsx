import { useState } from 'react'
import './BottomNav_Bar.css'



//imported images
import detailneLogo from '/src/General/Design elements/Vapp detailsem.png'
import kontaktideTaust from '../Design elements/Kontaktide taust lipukujuline.svg'
import gmailLogo from '../Design elements/gmail logo.svg'
import instagramLogo from '../Design elements/instagram logo.svg'
import gmailLogoClicked from '../Design elements/gmail logo clicked.svg'
import instagramLogoClicked from '../Design elements/instagram logo clicked.svg'


function Pilt( {pilt,kirjeldus, size}) {
  return <img src={pilt} alt={kirjeldus} style={{ width: size, height: 'auto' }} />;
}


function Logo() {
  return (
    <div className='footer-logo'>

        <div className='footer-logo-pilt'>
          <Pilt pilt = {detailneLogo} kirjeldus = {"Eesti Liputoimkondade Liidu Logo"} size = {200}/>
        </div>
        
        <div className='footer-logo-pealkiri'>
          <p className='h1'>Eesti Liputoimkondade</p>
          <p className='h1'>Liit</p>
        </div>
        
    </div>
    
  );
}






function PeaLink({text}) {
  const [textColor, setTextColor] = useState('');
  const [hovered, setHovered] = useState(false);

  function handleMouseEnter() {
    setTextColor('#EFA900');
    setHovered(true);
  }

  function handleMouseLeave() {
    setTextColor('');
    setHovered(false);
  }

  function handleClick() {

  }

  return (
    <button 
      className= 'footer-link' 
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}  
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <p 
          className={`footer-link-pealink-text ${hovered ? 'hovered' : ''}`} 
          style={{ color: textColor }}
        >
          {text}
        </p>
      </div>
    </button>
  );
}

function Link({text}) {
  const [textColor, setTextColor] = useState('');

  function handleMouseEnter() {
    setTextColor('#EFA900');
  }

  function handleMouseLeave() {
    setTextColor('');
  }

  function handleClick() {

  }

  return (
    <button 
      className= 'footer-link' 
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}  
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <p className='footer-link-tavalink-text' style={{ color: textColor }}>{text}</p>
      </div>
    </button>
  );
}

function Lingid() {
  return (
    <div className='footer-lingid'>
      <PeaLink text="Kirjeldus" />
      <PeaLink text="Liikmeskond" />
      <Link text="Liikmed" />
      <Link text="Juhatus" />
      <Link text="Kontakt" />
      <PeaLink text="Sümboolika" />
      <Link text="Vapid" />
      <Link text="Lugu" />
      <Link text="Kasutus" />
    </div>
  )
}




function Kontakt({symbolNormal, symbolClicked, text, size}) {
  const [textColor, setTextColor] = useState('');
  const [symbol, setSymbol] = useState(symbolNormal);
  const [clicked, setClicked] = useState(false);

  function handleMouseEnter() {
    setTextColor('#EFA900');
    setSymbol(symbolClicked)
  }

  // Handle hover leave event
  function handleMouseLeave() {
    setTextColor('');
    setSymbol(symbolNormal);
  }

  function handleClick() { 
    setClicked(true);

    setTimeout(() => {
      setClicked(false);
    }, 500);
  }

  return (
    <button 
      className={`footer-kontakt-button ${clicked ? 'clicked' : ''}`} // Add the "clicked" class when clicked
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}  
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <div className='footer-kontakt-button-symbol'>
        <img
          src={symbol}
          alt="symbol"
          className={`footer-kontakt-button-symbol ${clicked ? 'clicked' : ''}`} 
          style={{ width: size, height: 'auto' }}
        />
        </div>
        
        <p className='h4' style={{ color: textColor }}>{text}</p>
      </div>
    </button>
  );
}


function Kontaktid() {
  return (
    <div className='footer-kontaktid'>
      <div className='footer-kontaktid-taust'>
        <Pilt pilt = {kontaktideTaust} kirjeldus = {"KontaktideTaust"} size = {220}/>
      </div>

      <div className='footer-kontaktid-sisu'>
        <Kontakt symbolNormal = {gmailLogo} symbolClicked={gmailLogoClicked} text = "liputoimkondadeliit@gmail.com"  size = {70}/>
        <Kontakt symbolNormal = {instagramLogo} symbolClicked={instagramLogoClicked} text = "@liputoimkondadeliit"  size = {58}/>
      </div>
      
    </div>
    
  )
}

export default function BottomNavigationBar() {
  return (
    <div className='footer' style={{ width: `${document.documentElement.clientWidth}px` }}>
      <div className='top-gray-box'></div>

      <div  className='footer-content'>
        <Logo />
        <Lingid />
        <Kontaktid />

      </div>
      



    </div>
  );
}
