import { useState } from 'react'
import '../../App.css'
import './Esileht.css'

//imported components
import TopNavigationBar from '../../General/Components/TopNav_Bar.jsx';
import BottomNavigationBar from '../../General/Components/BottomNav_Bar.jsx';
import LinkUnderlined from '../../General/Components/LinkUnderlined.jsx';
import TopBanner from './Components/TopBanner.jsx';




//imported texts
import esilehePeamineKirjeldus from './esilehePeamineKirjeldus.js'

//imported images
import detailneLogo from '../../assets/General/Vapp detailsem.png'
import lihtneLogo from '../../assets/General/Vapp lihtne.png'
import banner1 from './Design elements/liputoimkond1.jpg'
import banner2 from './Design elements/liiv.jpg'
import banner3 from './Design elements/sygis.jpg'



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

        <TopBanner 
          title="Eesti Koolide Liputoimkondade Liit" 
          images={[banner1, banner2, banner3]}
        />


        <div className='esileht-main'>
          <h1>Esileht - tegemata <br/>Eesti Koolide Liputoimkondade Liit</h1>
          <TextArea content = {esilehePeamineKirjeldus}/>

          <LinkUnderlined to="./liikmed" display="Liikmete lehekülg" />
          <br />
          <LinkUnderlined to="./pohikiri" display="Pohikiri lehekülg" />
          <br />
          <LinkUnderlined to="./dokumendid" display="Dokumendid lehekülg" />
          <br />
          <LinkUnderlined to="./uudised" display="Uudised lehekülg" />
          <br />
          <LinkUnderlined to="./uudisview" display="Uudisleht lehekülg" />
          <br />
          <LinkUnderlined to="./tutvustus" display="Liidu tutvustus" />
          <br />
          <LinkUnderlined to="./syndmused" display="Sündmused" />
          <br />
          <LinkUnderlined to="./juhatus" display="Juhatus" />
          <br />
          <LinkUnderlined to="./ajalugu" display="Ajalugu" />
          <br />
          <LinkUnderlined to="./symboolika" display="Symboolika" />
          <br />
          <LinkUnderlined scrollTo = {document.documentElement.scrollHeight} display="Kontakt" />
        </div>



        <BottomNavigationBar />

      </div>
    </div>
    

  );
}


