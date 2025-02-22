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
    <li>
      <button 
        className = "about_me"
        onClick = {handleClick}
        >
          {text}
        </button></li>
  );
}


function TopNavigationBarButtons() {
  return (
    <nav>
      <ul>
            <TopNaviagtionButton text="Kirjeldus" />
            <li class="dropdown">
            <button class="dropbtn">Liikmeskond ▼</button>
              <ul class="dropdown-content">
                <li><a href="#">Liikmed</a></li>
                <li><a href="#">Juhatus</a></li>
                <li><a href="#">Kontakt</a></li>
              </ul>
            </li>
            <li class="dropdown">
            <button class="dropbtn">Sümboolika ▼</button>
              <ul class="dropdown-content">
                <li><a href="#">Vappide Kirjeldus</a></li>
                <li><a href="#">Lugu</a></li>
                <li><a href="#">Kasutus</a></li>
              </ul>
            </li>
            <li class="dropdown">
            <button class="dropbtn">Dokumendid ▼</button>
              <ul class="dropdown-content">
                <li><a href="#">Põhikiri</a></li>
                <li><a href="#">item_1</a></li>
                <li><a href="#">item_2</a></li>
              </ul>
            </li>

            <suurVahe />
            <suurVahe />
        
      
      </ul>
    </nav>
      
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
