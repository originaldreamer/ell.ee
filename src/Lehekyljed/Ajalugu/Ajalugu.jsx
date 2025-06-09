import { useState, useEffect } from 'react'
import '../../General/Design styles/PlainContentPage3.css'
import '../../General/Design styles/PlainContentPage.css';

//imported components
import TopNavigationBar from '../../General/Components/TopNav_Bar.jsx';
import BottomNavigationBar from '../../General/Components/BottomNav_Bar.jsx';
import PageHeaderLines from '../../General/Components/PageHeaderLines.jsx';
import PageHeaderImage from '../../General/Components/PageHeaderImage.jsx'
import ImageAndContent from '../../General/Components/ImageAndContent.jsx';

//imported content
import headerImage from './Content/headerImage.jpg'; 
import asutamistseremoonia from './Content/asutamistseremoonia.jpg';
import asutamistseremoonia2 from './Content/põhikirja_allkirjastamine.jpg';
import koolitamine from './Content/koolitamine_Sindi_Gümnaasiumis.jpg';
import edasisedSammud2 from './Content/lipukultuuri_õpetamine_Kohtla_Järve_Gümnaasiumis.jpg'
import edasisedSammud3 from './Content/märtsiküüditamise_76. aastapäeva_mälestustseremoonia.jpg'

import liiduAsutajad from './Content/liidu asutajad.jpg';


 

export default function Ajalugu() {
  return (
      <div className='plain3-container'>
          <div className='plain-bg-icons' />

          <div className='plain3-body'>
              <TopNavigationBar />


              <PageHeaderImage title="Ajalugu" image={headerImage} offsetY='60%'/>

              <ImageAndContent content={
                 <div>
                 <div className="mid-top-header">Liidu asutamine</div>
                 
                 <div className="normal-text">
                   2024. aastal otsustasid erinevate toimkondade esindajad <span className='bold'>Ernst Johannes Pae</span>, 
                   <span className='bold'> Adrian Georg Zurbuchen</span>, <span className='bold'>Mattias Viirma</span>, 
                   <span className='bold'> Hendrik Haljasmäe</span> ja 
                   <span className='bold'> Andrus Lepikult</span> hakata ühendama koolide liputoimkondi. 
                   Korraldati mitmeid koosolekuid, koostati dokumente ja suheldi paljude organisatsioonide ning koolidega.
                   <br /> <br />
                   Kogu protsessi vältel polnud miski kindel. Isegi liidu nimetus oli praegusest erinev: Eesti Liputoimkondade Liit. 
                   Kui raske töö oli tehtud, oli aeg liit ametlikult välja kuulutada.
                 </div>
                 </ div>
              }
                
                images={[
                    liiduAsutajad
                ]}

              />

            <ImageAndContent content={
                 <div>
                 <div className="mid-top-header">Asutamistseremoonia</div>
                 
                 <div className="normal-text">
                   Põhikirja allkirjastamine ja asutamislepingu sõlmimine toimusid 
                   20. veebruaril 2025 Riigikogu Valges Saalis piduliku tseremoonia käigus. 
                   Allkirjastamistseremoonial osalesid EKLL-i liputoimkonnad, nende koolide direktorid, huvijuhid jpt. 
                   Üritusel kõnelesid Riigikogu esimees <span className='bold'> Lauri Hussar</span>, 
                   Eesti Lipu Seltsi esimees <span className='bold'> Jüri Trei</span> ja 
                   EKLL-i esindaja <span className='bold'> Ernst Johannes Pae</span>, kes rõhutasid lipukultuuri ja EKLL-i tähtsust 
                   eestlaste patriootlikkuse ja ühise ühtekuuluvustunde kujundamises. 
                   Muusikalisi elamusi pakkus Tallinna 21. Kooli Noormeestekoor. 
                   <br /> <br />
                   Asutajaliikmeteks said üheteistkümne gümnaasiumi liputoimkonnad üle Eesti:
                   <br />
                   <div className='loetelu'>
                      <div className='bulletPoint'>Gustav Adolfi Gümnaasium</div>
                      <div className='bulletPoint'>Jakob Westholmi Gümnaasium</div>
                      <div className='bulletPoint'>Kadrioru Saksa Gümnaasium</div>
                      <div className='bulletPoint'>Kohtla-Järve Gümnaasium</div>
                      <div className='bulletPoint'>Sindi Gümnaasium</div>
                      <div className='bulletPoint'>Tallinna 21. Kool</div>
                      <div className='bulletPoint'>Tallinna Inglise Kolledž</div>
                      <div className='bulletPoint'>Tallinna Mustamäe Riigigümnaasium</div>
                      <div className='bulletPoint'>Tallinna Prantsuse Lütseum</div>
                      <div className='bulletPoint'>Tallinna Reaalkool</div>
                      <div className='bulletPoint'>Tallinna Ühisgümnaasium</div>
                  </div> 
                 </div>
                 </ div>
              }
                
                images={[
                    asutamistseremoonia,
                    asutamistseremoonia2
                ]}

                reverse='true'

              />

              <ImageAndContent content={
                 <div>
                 <div className="mid-top-header">Esimesed sammud</div>
                 
                 <div className="normal-text">
                   Pärast ametlikku asutamist moodustati alaline sekretariaat, hakati kavandama koolitusi ja 
                   tseremooniate korraldust ning algas uute liikmete otsimine. 
                   2025. aasta juuliks valmis liidu ametlik veebileht, 
                   mille kujundasid ja realiseerisid veebidisainerid 
                   <span className='bold'> Rasmus Joel Raidjõe</span> ning <span className='bold'> Mattis Rääbis</span>. 
                 </div>
                 </ div>
              }
                
                images={[
                    koolitamine,
                    edasisedSammud2,
                    edasisedSammud3
                ]}

                useOnlyScroll='true'
                scrollAspect='1.5'

              />


              <BottomNavigationBar />
          </div>
      </div>
  );
}
