import { useState } from 'react'
import { Link } from 'react-router-dom';
import '../App.css'
import './Esileht.css'

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
    <div className = "normal-text">
        <p> {content} </p>  
      </div>
  );
}

export default function Esileht() {
  const [fileContent, setFileContent] = useState('');

  return (
    <div className='esileht-container'>
      <div className='esileht-bg' />

      <div className='esileht-body'>
        
        <TopNavigationBar /> 


        <div className='esileht-main'>
          <h1>Eesti Koolide Liputoimkondade Liit</h1>
          <TextArea content = {esilehePeamineKirjeldus}/>

          <Link className='link' to="./liikmed">Liikmete lehekülg</Link>
        </div>



        <BottomNavigationBar />

      </div>
    </div>
    

  );
}


