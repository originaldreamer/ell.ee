import { useState } from 'react'
import './TopNav_Bar.css'


//imported images
import detailneLogo from '../../assets/General/Vapp detailsem.png';
import lihtneLogo from '../../assets/General/Vapp lihtne.png'


//imported elements
import arrowDown from '../Design Elements/Dropdown Arrow down.svg'


function Pilt( {pilt,kirjeldus, size}) {
  return <img src={pilt} alt={kirjeldus} style={{ width: size, height: 'auto' }} />;
}

function TopNaviagtionButtonDropDown({text, links}) {

  return ( 
    
    <div className="dropdown">
      <button className="dropbtn">
        {text}
        <img src={arrowDown} />
      </button>
        <div className="dropdown-content">
          {links.map((link, index) => (
            <div key={index}>
              <a href={link.href} style={{ color: link.unComplete ? "red" : "black" }}>
                {link.label}
              </a>
            </div>
          ))}
        </div>
      </div>
  );
}

function TopNaviagtionButtonNormal({ text, link }) {
  return ( 
    <div className="normalbtn">
      <a href={link} style={{ color: "inherit", textDecoration: "none" }}>
        {text}
      </a>
    </div>
  );
}




function TopNavigationBarButtons() {
  return (
    <div className='topBar-buttons'>

      <TopNaviagtionButtonDropDown
        text = "Liit"
        links={[
          { href: "./tutvustus", label: "Tutvustus", unComplete: "true"},
          { href: "./juhatus", label: "Juhatus", unComplete: "true"},
          { href: "./liikmed", label: "Liikmed" },
          { href: "./pohikiri", label: "Põhikiri" }
        ]}
      />

    <TopNaviagtionButtonDropDown
        text = "Teated"
        links={[
          { href: "./uudised", label: "Uudised", unComplete: "true" },
          { href: "./syndmused", label: "Sündmused" }
        ]}
      />


    <TopNaviagtionButtonNormal
        text = "Dokumendid"
        link = "./dokumendid"
      />

    <TopNaviagtionButtonNormal
      text = "Kontakt"
      link = "./kontakt"
    />
          
        
  
      </div>
      
  );
}

function Logo() {
  return (
    <a className='logo' href="./">
      <img src={detailneLogo} style={{width: '70px'}}/>

      <div className='logoTekst'>
        Eesti Koolide
        <br/>
        Liputoimkondade Liit
      </div>
    </a>
  );
}

export default function TopNavigationBar() {
  return (
    <div className='topNavBar'>

      <Logo />

      <TopNavigationBarButtons />
    </div>
  );
}
