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

//imported images
import detailneLogo from '../../assets/General/Vapp detailsem.png'
import lihtneLogo from '../../assets/General/Vapp lihtne.png'
import banner1 from './Design elements/liputoimkond1.jpg'
import banner2 from './Design elements/liputoimkond2.jpg'
import banner3 from './Design elements/liputoimkond3.jpg'
import banner4 from './Design elements/liputoimkond4.jpg'
import koolitaminePilt from './Design elements/koolitamine.jpg'



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
                <div className="mid-top-header">Ühendame Eesti liputoimkonnad</div>
                
                <div className="normal-text">
                  Kilpkonnad, oma <span className="bold">aeglase ja väärika</span> sammuga, hiilivad tasaselt läbi tihedate metsaaluste ja jõekallaste, otsides <span className="bold">mõnusat paika</span>, kus jalga puhata. <br />
                  Kuigi nad liiguvad kui tõelised <span className="bold">metsakuningad</span>, hoiavad nad silma peal igasugustel kaladel, kes lõbusalt vees sulistavad. <br />
                  Mõni kilpkonn kinnitab, et kalad on nende parimad sõbrad, kuid samas tekib neil kahtlus, et needsamad sabaga lehvitajad võivad neid kogemata suure kalaparve keskel pikali rammida.
                </div>
              </div>}
              
              images={[
                  koolitaminePilt
              ]}
          />

          <ImageAndContent 
            content={
                <div>
                <div className="mid-top-header">Arendame lipukultuuri</div>
                
                <div className="normal-text">
                  Kilpkonnad, oma <span className="bold">aeglase ja väärika</span> sammuga, hiilivad tasaselt läbi tihedate metsaaluste ja jõekallaste, otsides <span className="bold">mõnusat paika</span>, kus jalga puhata. <br />
                  Kuigi nad liiguvad kui tõelised <span className="bold">metsakuningad</span>, hoiavad nad silma peal igasugustel kaladel, kes lõbusalt vees sulistavad. <br />
                  Mõni kilpkonn kinnitab, et kalad on nende parimad sõbrad, kuid samas tekib neil kahtlus, et needsamad sabaga lehvitajad võivad neid kogemata suure kalaparve keskel pikali rammida.
                </div>
              </div>}
              
              images={[
                  banner2
              ]}
              
              offsetYSmallScreen='-35px'
              reverse = 'true'
          />

          <ImageAndContent
            content={
                <div>
                <div className="mid-top-header">???</div>
                
                <div className="normal-text">
                  Kilpkonnad, oma <span className="bold">aeglase ja väärika</span> sammuga, hiilivad tasaselt läbi tihedate metsaaluste ja jõekallaste, otsides <span className="bold">mõnusat paika</span>, kus jalga puhata. <br />
                  
                </div>
              </div>}
              
              images={[
                  banner2
              ]}

              offsetYSmallScreen='-35px'
          />
          




        <BottomNavigationBar />

      </div>
    </div>
    

  );
}


