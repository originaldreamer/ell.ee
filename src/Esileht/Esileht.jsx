import { useState } from 'react'
import { Link } from 'react-router-dom';
import '../App.css'

//imported components
import TopNavigationBar from './Components/TopNav_Bar.jsx';
import BottomNavigationBar from './Components/BottomNav_Bar.jsx';


//imported texts
import esilehePeamineKirjeldus from './esilehePeamineKirjeldus.js'
//imported images
import detailneLogo from '../assets/General/Vapp detailsem.png'
import lihtneLogo from '../assets/General/Vapp lihtne.png'



function TextArea( {content} ) {
  return (
    <div className = "text">
        <p> {content} </p>  
      </div>
  );
}

export default function Esileht() {
  const [fileContent, setFileContent] = useState('');

  return (
    <div className='body'>

      <TopNavigationBar />


      <div className='main'>
        <h1>Eesti Liputoimkondade Liit</h1>
        <TextArea content = {esilehePeamineKirjeldus}/>

        <Link className='link' to="./liikmed">Liikmete lehekülg</Link>
      </div>



      <BottomNavigationBar/ >
      
    </div>

  );
}


