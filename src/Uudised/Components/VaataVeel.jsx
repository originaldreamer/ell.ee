import { useState, useEffect } from 'react'
import './VaataVeel.css';

//imported components
import UudisedBigTile from './UudisedBigTile.jsx';
import HeaderSeparatorOne from '../../General/Components/HeaderSeparatorOne.jsx';

//imported content
import Sisu from '../Content/Sisu.jsx';
import otherUudis1 from '../Content/other uudis 1.jpg';
import otherUudis2 from '../Content/other uudis 2.jpg';
import otherUudis3 from '../Content/other uudis 3.jpg';


//imported elements
import plusIcon from '../Design elements/plus icon.svg';
import plusIconActivated from '../Design elements/plus icon activated.svg';

function Rohkem() {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <div
            className='VaataVeel-rohkem-container'
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div className={`VaataVeel-rohkem-text ${isHovering ? 'hovering' : ''}`}>
                Rohkem
            </div>
            <img
                className={`VaataVeel-rohkem-img ${isHovering ? 'hovering' : ''}`}
                src={isHovering ? plusIconActivated : plusIcon}
                alt="Plus Icon"
            />
        </div>
    );
}


export default function VaataVeel() {
  

  return (
      <div className='VaataVeel-container'>
        <HeaderSeparatorOne text = "Vaata veel"/>

          <div className='VaataVeel-elemendid' >

            <UudisedBigTile 
                pilt={otherUudis1}
                date="24.02.2025"
                title="Jalutuskäik looduses koos kõigi liputoimkondadega"
                sisu={<Sisu />}
            />
            

            <UudisedBigTile 
                pilt={otherUudis2}
                date="15.03.2025"
                title="Kevadine matk uute avastustega"
                sisu="Kevade saabumise puhul korraldati traditsiooniline matk, mis viis osalejad läbi maaliliste radade ja võrratute loodusvaadete. Kõik osalejad said nautida värsket õhku, õppida tundma uusi taime- ja loomaliike ning veeta meeldejäävat päeva looduse keskel. Matka lõpetuseks peeti lõkkeõhtu, kus jagati muljeid ja kuulati lugusid minevikust."
            />

            <UudisedBigTile 
                pilt={otherUudis3}
                date="01.04.2025"
                title="Aprillinaljade festival tõi naerupahvakuid"
                sisu="Aprillikuu algust tähistati erilise festivaliga, kus kogukonna liikmed esitasid nalju, sketše ja humoorikaid etteasteid. Üritus tõi kohale hulgaliselt inimesi, kes said osa päevast täis naeru ja lõbusaid üllatusi. Lisaks korraldati töötuba, kus õpetati naljakate lugude kirjutamist ja esitamist. Festivalist kujunes tõeline kogukonnaelu tipphetk."
            />
          </div>

          <div>
            <Rohkem />
          </div>

      </div>
  );
}