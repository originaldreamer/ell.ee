import { useState } from 'react'
import '../App.css'
import './Esileht.css'

//imported components
import TopNavigationBar from '../General/Components/TopNav_Bar.jsx';
import BottomNavigationBar from '../General/Components/BottomNav_Bar.jsx';
import LinkUnderlined from '../General/Components/LinkUnderlined.jsx';



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

          <LinkUnderlined to="./liikmed" display="Liikmete lehekülg" />
          <br />
          <LinkUnderlined to="./pohikiri" display="Pohikiri lehekülg" />
          <br />
          <LinkUnderlined to="./dokumendid" display="Dokumendid lehekülg" />
          <br />
          <LinkUnderlined to="./uudised" display="Uudised lehekülg" />
          <br />
          <LinkUnderlined to="./tutvustus" display="Liidu tutvustus" />
        </div>



        <BottomNavigationBar />

      </div>
    </div>
    

  );
}


