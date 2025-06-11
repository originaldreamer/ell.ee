import { useState, useEffect } from 'react'
import './UudisLehtVaataVeel.css';
import useIsTouchDevice from '/src/hooks/UseIsTouchDevice.jsx';

//imported components
import UudisLehtBigTile from './UudisLehtBigTile.jsx';
import HeaderSeparatorOne from '../../../General/Components/HeaderSeparatorOne.jsx';

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
    const isTouch = useIsTouchDevice();

    const handleClick = () => {
        window.location.href = './uudised';
    };

    const unActivateHover = () => {
        setTimeout(() => {
            setIsHovering(false); 
        }, 300);

    }
 
    return (
        <div
            className={`uudisLeht-VaataVeel-rohkem-container ${isHovering ? 'hover' : ''}`}
            onMouseEnter={!isTouch ? () => setIsHovering(true) : undefined} 
            onMouseLeave={!isTouch ? () => setIsHovering(false) : undefined} 
            onClick={event => {
                if (isTouch) {
                     setIsHovering(true);
                     unActivateHover();

                     setTimeout(() => {
                        handleClick(event);
                    }, 300);
                }
                else {
                    handleClick(event);
                }
                
                
            }}
        >
            <div className={`uudisLeht-VaataVeel-rohkem-text ${isHovering ? 'hovering' : ''}`}>
                Rohkem
            </div>

        </div>
    );
}


export default function UudisLehtVaataVeel() {
  

  return (
      <div className='uudisLeht-VaataVeel-container'>
        <HeaderSeparatorOne text = "Vaata veel"/>

          <div className='uudisLeht-VaataVeel-elemendid' >

            <UudisLehtBigTile 
                pilt={otherUudis1}
                date="24.02.2025"
                title="Jalutuskäik looduses koos kõigi liputoimkondadega"
                sisu={<Sisu />}
                to='./uudisview'
            />
            

            <UudisLehtBigTile 
                pilt={otherUudis2}
                date="15.03.2025"
                title="Kevadine matk uute avastustega"
                sisu="Kevade saabumise puhul korraldati traditsiooniline matk, mis viis osalejad läbi maaliliste radade ja võrratute loodusvaadete. Kõik osalejad said nautida värsket õhku, õppida tundma uusi taime- ja loomaliike ning veeta meeldejäävat päeva looduse keskel. Matka lõpetuseks peeti lõkkeõhtu, kus jagati muljeid ja kuulati lugusid minevikust."
                to='./uudisview'
            />

            <UudisLehtBigTile 
                pilt={otherUudis3}
                date="01.04.2025"
                title="Aprillinaljade festival tõi naerupahvakuid"
                sisu="Aprillikuu algust tähistati erilise festivaliga, kus kogukonna liikmed esitasid nalju, sketše ja humoorikaid etteasteid. Üritus tõi kohale hulgaliselt inimesi, kes said osa päevast täis naeru ja lõbusaid üllatusi. Lisaks korraldati töötuba, kus õpetati naljakate lugude kirjutamist ja esitamist. Festivalist kujunes tõeline kogukonnaelu tipphetk."
                to='./uudisview'
            />
          </div>

          <div>
            <Rohkem />
          </div>

      </div>
  );
}