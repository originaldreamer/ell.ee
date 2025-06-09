import { useState, useEffect, useRef } from 'react'
import '../../App.css'
import './Esileht.css'

//imported components
import TopNavigationBar from '../../General/Components/TopNav_Bar.jsx';
import BottomNavigationBar from '../../General/Components/BottomNav_Bar.jsx';
import LinkUnderlined from '../../General/Components/LinkUnderlined.jsx';
import TopBanner from './Components/TopBanner.jsx';
import MidTextSeparator from '../../General/Components/MidTextSeparator.jsx';
import ImageAndContent from '../../General/Components/ImageAndContent.jsx';
import KalendriPoints from './Components/KalendriPoints.jsx';
import Koostoopartnerid from './Components/Koostoopartnerid.jsx';

//imported images
import detailneLogo from '../../assets/General/Vapp detailsem.png'
import lihtneLogo from '../../assets/General/Vapp lihtne.png'
import banner1 from './Design elements/liputoimkond1.jpg' 
import banner2 from './Design elements/liputoimkond2.jpg'
import banner3 from './Design elements/liputoimkond3.jpg'
import banner4 from './Design elements/liputoimkond4.jpg'

import liit1 from './Design elements/Eesti_Koolide_Liputoimkondade_Liit.jpg'
import eesmark1 from './Design elements/21. kooli liputoimkond.jpg'
import liputoimkond1 from './Design elements/Liputoimkonnad kõrvuti.jpg'



function TextArea( {content} ) {
  return (
    <div className = "normal-text">
        <p> {content} </p>  
      </div>
  );
}

export default function Esileht() {
  const [fileContent, setFileContent] = useState('');
  const [sloganMargin, setSloganMargin] = useState(window.innerWidth >= 450 ? '-10px' : '-50px');
  const myRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 450) {
        setSloganMargin('-10px');
      } else {
        setSloganMargin('-50px');
      }
    };

    

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }
  , []);

  return (
    <div className='esileht-container'>
      <div className='esileht-bg' />

      <div className='esileht-body'>
        
        <TopNavigationBar /> 

        <TopBanner 
          title="Eesti Koolide Liputoimkondade Liit" 
          images={[banner1, banner2, banner3, banner4]} 
          scrollToElement={myRef}
        />


        <div className='esileht-slogan' style={{marginBottom: sloganMargin}}>
          <MidTextSeparator
            text = {<div >
                <div className='bold'>„Vexillum signum libertatis“</div> <br/>
                „Lipp on vabaduse sümbol“
            </div>}
            bgColor='white'
            marginTop='0px'
          />
        </div>
          

          <KalendriPoints />

          <ImageAndContent myRef={myRef}
            content={
                <div>
                <div className="mid-top-header">Liit</div>
                
                <div className="normal-text">
                  Eesti Koolide Liputoimkondade Liit (EKLL) on gümnaasiumiõpilaste initsiatiivist 
                  sündinud ühendus, mis koondab koolide liputoimkondi üle Eesti, 
                  et ühiselt tagada sinimustvalge lipu väärikas heiskamine, 
                  edendada lipuetiketti ning jagada teadmisi ja kogemusi liputseremooniate 
                  korraldamisel ning traditsioonide hoidmisel.
                </div>
              </div>}
              
              images={[
                  liit1
              ]}
          />

          <ImageAndContent 
            content={
                <div>
                <div className="mid-top-header">Eesmärk</div>
                
                <div className="normal-text">
                   Meie eesmärk on seista Eesti riigilipu ja sümboolika väärika kasutamise eest, arendada lipukultuuri, tutvustada noortele Eesti lipu seadust ja lipuetikettti, kaitsta koolide liputoimkondade ühiseid huve, koolitada uusi liputoimkondi ning vahendada koostööd ja suhtlust Eesti erinevate liputoimkondade vahel. 
                </div>
              </div>}
              
              images={[
                  eesmark1
              ]}
              
              offsetYSmallScreen='-35px'
              reverse = 'true'
          />

          <ImageAndContent
            content={
                <div>
                <div className="mid-top-header">Liputoimkonnad</div>
                
                <div className="normal-text">
                  Kooli liputoimkond on vabatahtlik õpilasorganisatsioon, millel on selged tunnused: liikmeskond koosneb õpilastest, toimkonda juhivad samuti õpilased ning sellel on kooli (haridusasutuse) ametlik tunnustus. Liputoimkonna ülesandeks on esindada, heisata, valvata ja kaitsta riigi- ja koolilippu ning edendada koolis ja ühiskonnas Eesti lipukultuuri. 
                  
                </div>
              </div>}
               
              images={[
                  liputoimkond1
              ]}

              offsetYSmallScreen='-35px'
          />
          
          <Koostoopartnerid />




        <BottomNavigationBar />

      </div>
    </div>
    

  );
}


