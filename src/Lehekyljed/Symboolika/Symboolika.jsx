import { useState, useEffect } from 'react'
import '../../General/Design styles/PlainContentPage3.css'

//imported components
import TopNavigationBar from '../../General/Components/TopNav_Bar.jsx';
import BottomNavigationBar from '../../General/Components/BottomNav_Bar.jsx';
import PageHeaderLines from '../../General/Components/PageHeaderLines.jsx';
import PageHeaderImage from '../../General/Components/PageHeaderImage.jsx'
import ImageAndContent from '../../General/Components/ImageAndContent.jsx';

//imported content
import headerImage from './Content/mets.jpg'; 
import turtleImage from './Content/turtle.jpg'
import paikeImage from './Content/paike.jpg'
import koskImage from './Content/kosk-tere-esa.jpg'
import lossLippImage from './Content/lossLipp.jpg'




export default function Symboolika() {
  return (
      <div className='plain3-container'>
          <div className='plain3-bg' />

          <div className='plain3-body'>
              <TopNavigationBar />


              <PageHeaderImage title="Sümboolika" image={headerImage} offsetY='0%'/>

              <ImageAndContent content={
                 <div>
                 <div className="mid-top-header">[AI] Kilpkonnade Jutud Metsas</div>
                 
                 <div className="normal-text">
                   Kilpkonnad, oma <span className="bold">aeglase ja väärika</span> sammuga, hiilivad tasaselt läbi tihedate metsaaluste ja jõekallaste, otsides <span className="bold">mõnusat paika</span>, kus jalga puhata. <br />
                   Kuigi nad liiguvad kui tõelised <span className="bold">metsakuningad</span>, hoiavad nad silma peal igasugustel kaladel, kes lõbusalt vees sulistavad. <br />
                   Mõni kilpkonn kinnitab, et kalad on nende parimad sõbrad, kuid samas tekib neil kahtlus, et needsamad sabaga lehvitajad võivad neid kogemata suure kalaparve keskel pikali rammida.
                 </div>
                 
                 
                 <div className="normal-text">
                   Metsas haikalasid just sageli ei kohta, ent kilpkonnad teavad, et meresügavustes võib varitseda tõeline <span className="bold">õudusunenägu</span>. <br />
                   Kui nad kasvõi korraks kuulevad sõna “<span className="bold">hai</span>”, tõmbuvad nad turvaliselt oma tugeva kilbi alla peitu. <br />
                   Väidetavalt on mõned kilpkonnad isegi endale veealuseid periskoope ehitanud, et haide tegemistel paremini silma peal hoida – igaks juhuks, kui mõni hai peaks ootamatult jalutuskäigu metsa tegema.
                 </div>
                 

                 
                 <div className="normal-text">
                   Hoolimata kõigest on kilpkonnad siiski sügavalt rahumeelsed tegelased, kes eelistavad kalade seltsis pigem lõbusalt ringi hulpida, kui end tühja hirmuga vaevata. <br />
                   Nad naudivad pikki vaikseid hetki, kus ainus heli on vaikne lehtede sahin ja kuskil kauguses vulisev oja. <br />
                   See mõnus rahu tuletab meile meelde, et vahel on tore lihtsalt aeg maha võtta, kilp kõrvuni tõmmata ja tukkuda – nii ei saa haikaladel ega kellelgi teisel mingit võimalust meid üllatada!
                 </div>
                 
                 
                 <div className="normal-text">
                   Nii et kui te järgmine kord metsa jalutama lähete, heitke pilk ka kilpkonnade suunas: võib-olla märkate neid naeratamas, sest nad teavad, et tõeline rõõm peitub aeglases kulgemises ja ettevaatlikus, ent pisut lõbusas suhtumises.
                 </div>
                 

                 
                 <div className="sub-header">Peamised omadused</div>
                 <div className="normal-text">
                   Kilpkonnade tunnused:
                   <div className="loetelu">
                     <div className="bulletPoint">
                       <span className="bold">Aeglased</span> ja väärikad liikumine
                     </div>
                     <div className="bulletPoint">
                       Tugev <span className="bold">kilp</span> kaitseks
                     </div>
                     <div className="bulletPoint">
                       Rahulik ja <span className="bold">turvaline</span> suhtumine loodusesse
                     </div>
                   </div>
                 </div>
               </div>}
                
                images={[
                    headerImage,
                    turtleImage,
                    paikeImage
                ]}

                

              />

            <ImageAndContent content={
                <div>
                <div className="mid-top-header">[AI]Lippude Lummuses: Miks lipud on metsade sümboliks</div>
                
                <div className="normal-text">
                  Metsade varjus elavad lipud - värvikirevad ja graatsilised olendid, keda peetakse metsade tõelisteks sümboliteks. <br />
                  Lipud lehvivad õrnalt tuules, nagu nad tervitaksid kõiki möödakäijaid. Neile meeldib koguneda avaratesse lagendikesse, kus nad saavad end vabalt välja sirutada ja oma <span className="bold">väljendusrikkaid mustreid</span> demonstreerida. <br />
                  Eriti uhked on lipud päikesepaistelisel hommikul, mil nende värvid säravad nagu metsa ehted.
                </div>
                
                <div className="normal-text">
                  Lipud on sotsiaalsed loomad, kes moodustavad tihedaid kogukondi. Nad armastavad arutada <span className='bold'>metsauudiseid</span>, nagu näiteks, milline puu otsustas kõige kõrgemaks kasvada või kuidas jõesilmad peegeldavad nende värve. <br />
                  Kui mõni puu ümber kukub, kogunevad lipud sinna ja lehvivad selle ümber tseremoniaalselt, nagu mälestusmärgiks. Samas ei unusta nad kunagi pidustusi – lippude kogunemine meenutab alati lõbusat metsapidu.
                </div>
                
                <div className="normal-text">
                  Ohu korral käituvad lipud julgelt, lehvides metsatuule rütmis, et hoiatada teisi loomi. Mõned lipud on aga teada-tuntud naljahambad, kes armastavad tuulega kaasa lüüa ja üksteise varju pugeda, nagu nad mängiksid peitust. <br />
                  Lipud naudivad ka uute kohtade avastamist. Kui mets saab uue teeraja, on lipud alati esimesed, kes sellele oma “jälje” jätavad – lehvides, et kõik teaksid, kus on kõige ilusam vaade.
                </div>
                
                <div className="normal-text">
                  Lippude lemmikhobi on aga <span className='bold'>rahu loomine</span>. Kui metsas puhkeb tüli, kogunevad lipud ja hakkavad harmooniliselt liikuma, justkui tuletades kõigile meelde, et värvide ilu tuleb erinevustest. <br />
                  Nad on tõelised rahutoojad, kelle liikumine meenutab rahustavat muusikat ja julgustab teisi elanikke unustama oma muresid.
                </div>


              </div>
              }
                
                images={[
                    koskImage,
                    lossLippImage
                ]}
                

                bgColor='var(--softYellow)'
              />


              <BottomNavigationBar />
          </div>
      </div>
  );
}
