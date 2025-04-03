import { useState, useEffect } from 'react'
import './Uudised.css';

//imported components
import TopNavigationBar from '../../General/Components/TopNav_Bar.jsx';
import BottomNavigationBar from '../../General/Components/BottomNav_Bar.jsx';
import UudisedHeader from './Components/UudisedHeader.jsx'
import UudisedGalerii from './Components/UudisedGalerii.jsx';
import VaataVeel from './Components/VaataVeel.jsx';

//imported content
import tempPicture from './Content/2025_liputoimkond.jpg';
import tempPicture2 from './Content/temp2.jpg';
import tempPicture3 from  './Content/temp3.jpg';
import tempPicture4 from   './Content/temp4.jpg';
import tempPicture5 from './Content/testPilt.jpg'
import Sisu from './Content/Sisu.jsx';


export default function Uudised() {
  

  return (
      <div className='uudised-container'>
          <div className='uudised-bg' />

          <div className='uudised-body'> 
              <TopNavigationBar />

              <UudisedHeader 
                title ="[Temp]Liputoimkondade Liidu asutamine" 
                date="20.02.2025"
                pilt={tempPicture}
                pildiAutor="Keegi tähtis"
              />
                
                <div className='uudised-sisu'> 
                    <Sisu />
                </div>

                <UudisedGalerii 
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

                <VaataVeel />



              <BottomNavigationBar />
          </div>
      </div>
  );
} 