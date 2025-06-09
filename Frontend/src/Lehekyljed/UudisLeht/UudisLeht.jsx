import { useState, useEffect } from 'react'
import './UudisLeht.css';

//imported components
import TopNavigationBar from '../../General/Components/TopNav_Bar.jsx';
import BottomNavigationBar from '../../General/Components/BottomNav_Bar.jsx';
import UudisLehtHeader from './Components/UudisLehtHeader.jsx'
import UudisLehtGalerii from './Components/UudisLehtGalerii.jsx';
import UudisLehtVaataVeel from './Components/UudisLehtVaataVeel.jsx';

//imported content
import tempPicture from './Content/2025_liputoimkond.jpg';
import tempPicture2 from './Content/temp2.jpg';
import tempPicture3 from  './Content/temp3.jpg';
import tempPicture4 from   './Content/temp4.jpg';
import tempPicture5 from './Content/testPilt.jpg'
import Sisu from './Content/Sisu.jsx';


export default function UudisLeht() {
  

  return (
      <div className='uudisLeht-container'>
          <div className='uudisLeht-bg' />

          <div className='uudisLeht-body'> 
              <TopNavigationBar />

              <UudisLehtHeader 
                title ="Liputoimkondade Liidu asutamine" 
                date="20.02.2025"
                pilt={tempPicture}
                pildiAutor="Keegi tähtis"
              />
                
                <div className='uudised-sisu'> 
                    <Sisu />
                </div>

                <UudisLehtGalerii 
                    pildid={[
                        tempPicture5,
                        tempPicture4,
                        tempPicture3,
                        tempPicture2,
                        tempPicture,
                        tempPicture2,
                        tempPicture5,
                        tempPicture2,
                        tempPicture4,
                        tempPicture2,
                        tempPicture4
                    ]}   
                />

                <UudisLehtVaataVeel />



              <BottomNavigationBar />
          </div>
      </div>
  );
} 