import { useState } from 'react'
import './Liikmed.css'

//imported components
import TopNavigationBar from '../Esileht/Components/TopNav_Bar.jsx';
import BottomNavigationBar from '../Esileht/Components/BottomNav_Bar.jsx';
import LiikmeteGrid from './Components/LiikmeteGrid.jsx';
import LiikmeKirjeldus from './Components/LiikmeKirjeldus.jsx';

export default function Liikmed() {
  const [showKirjeldus, setShowKirjeldus] = useState(false);
  const [liikmeteGridLayer, setLiikmeteGridLayer] = useState(100000);
  
  // Declare state variables with their setter functions
  const [liikmeNimi, setLiikmeNimi] = useState("Mustamäe Riigigümnaasium");
  const [kirjelduseText, setKirjelduseText] = useState("[AI] Mustamäe Riigigümnaasiumi liputoimkond on õpilasorganisatsioon, mille peamine ülesanne on väärikalt esitada, heisata ja kaitsta Eesti Vabariigi ning kooli lippu. Liputoimkond osaleb riigi- ja koolipühade puhul pidulikel liputseremooniatel, esindades kooli nii sise- kui ka välisüritustel.");
  const [kontakt, setKontakt] = useState("Andrus Lepikult, Andrus.Lepikult@edu.murg.ee");
  const [liitumisKuupaev, setLiitumisKuupaev] = useState("20.02.2025");
  const [instagram, setInstagram] = useState("https://murg.ee/");
  const [facebook, setFacebook] = useState("https://murg.ee/");

  const changeShowKirjeldusState = (state) => {
      setShowKirjeldus(state);

      if (state) {
          setLiikmeteGridLayer(50000);
      } else {
          setLiikmeteGridLayer(55000);
      }
  };

  return (
      <div>
          <div className='liikmed-body'>
              <TopNavigationBar />

              <div className='text'>Liikmed</div>

              <LiikmeteGrid clickFunction={() => changeShowKirjeldusState(true)} layer={liikmeteGridLayer} />

              {showKirjeldus && (
                  <LiikmeKirjeldus 
                      liikmeNimi={liikmeNimi}
                      kirjelduseText={kirjelduseText}
                      kontakt={kontakt}
                      liitumisKuupaev={liitumisKuupaev}
                      instagram={instagram}
                      facebook={facebook}
                      turnOffKirjeldus={() => changeShowKirjeldusState(false)}
                  />
              )}

              <BottomNavigationBar />
          </div>
      </div>
  );
}