import { useState } from 'react'
import './TopNav_Bar.css'


//imported images
import detailneLogo from '../../assets/General/Vapp detailsem.png';
import lihtneLogo from '../../assets/General/Vapp lihtne.png'


function Pilt( {pilt,kirjeldus, size}) {
  return <img src={pilt} alt={kirjeldus} style={{ width: size, height: 'auto' }} />;
}

function TopNaviagtionButton({text}) {
  function handleClick() {
    console.log('clicked!'); 
  }

  return ( 
    
    <button 
      className = "about_me"
      onClick = {handleClick}
      >

      {text}
      
    </button>
  );
}


function TopNavigationBarButtons() {
  return (
    <div className='topBar-buttons'>

<div className="dropdown">
            <button className="dropbtn">
            Kirjeldus
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginLeft: "5px", transform: "translateY(3px)" }}
              >
              <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
              <div className="dropdown-content">
                <div><a href="#">Liikmed</a></div>
                <div><a href="#">Juhatus</a></div>
                <div><a href="#">Kontakt</a></div>
              </div>
            </div>

            <div className="dropdown">
            <button className="dropbtn">
            Liikmeskond
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginLeft: "5px", transform: "translateY(3px)" }}
              >
              <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
              <div className="dropdown-content">
                <div><a href="#">Liikmed</a></div>
                <div><a href="#">Juhatus</a></div>
                <div><a href="#">Kontakt</a></div>
              </div>
            </div>

            <div className="dropdown">
            <button className="dropbtn">
              Sümboolika
              <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginLeft: "5px", transform: "translateY(3px)" }}
              >
              <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            </div>

            <div className="dropdown">
            <button className="dropbtn">
              Dokumendid
              <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginLeft: "5px", transform: "translateY(3px)" }}
              >
              <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
              </button>
              <div className="dropdown-content">
                <div><a href="#">Põhikiri</a></div>
                <div><a href="#">item_1</a></div>
                <div><a href="#">item_2</a></div>
              </div>
            </div>

        
      
 
    </div>
      
  );
}

export default function TopNavigationBar() {
  return (
    <div className='topNavBar'>

      <div className='logo'>
        <Pilt pilt = {detailneLogo} kirjeldus = {"Eesti Liputoimkondade Liidu Logo"} size = {70}/>
      </div>  

      <div className='logoTekst'>
        <div className='newLine'>
          Eesti Liputoimkondade
        </div>
        <div className='newLine'>
          Liit
        </div>
      </div>

      <TopNavigationBarButtons />
    </div>
  );
}
