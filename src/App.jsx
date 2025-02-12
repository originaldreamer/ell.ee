import { useState } from 'react'
import './App.css'

//imported texts
import esilehePeamineKirjeldus from './assets/Esileht/esilehePeamineKirjeldus.js'
//imported images
import detailneLogo from './assets/General/Vapp detailsem.png'
import lihtneLogo from './assets/General/Vapp lihtne.png'


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
                <li><a href="#">Parlament</a></li>
                <li><a href="#">MURG</a></li>
                <li><a href="#">21.</a></li>
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

function TopNavigationBar() {
  return (
    <>

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
    </>
  );
}

function TextArea( {content} ) {
  return (
    <div className = "text">
        <p> {content} </p>  
      </div>
  );
}

function App() {
  const [fileContent, setFileContent] = useState('');

  return (
    <>
    <body>
      <header>
        <TopNavigationBar />
      </header>

      <main>
        <h1>Eesti Liputoimkondade Liit</h1>
        <TextArea content = {esilehePeamineKirjeldus}/>
      </main>
      <section></section>
      <article></article>
      <aside></aside>
      <footer>
        <a href = "https://www.murg.ee/" className = "link">MURGI KODULEHT</a>
      </footer>
    </body>
    </>
  )
}

export default App
