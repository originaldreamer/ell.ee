import { useState } from 'react'
import './App.css'

//imported components
import TopNavigationBar from './Esileht/Components/TopNav_Bar.jsx';
import BottomNavigationBar from './Esileht/Components/BottomNav_Bar.jsx';


//imported texts
import esilehePeamineKirjeldus from './Esileht/esilehePeamineKirjeldus.js'
//imported images
import detailneLogo from './assets/General/Vapp detailsem.png'
import lihtneLogo from './assets/General/Vapp lihtne.png'



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
        <BottomNavigationBar />
      </footer>
    </body>
    </>
  )
}

export default App
