import { useState, useEffect } from 'react'
import '../../General/Design styles/PlainContentPage3.css';
import '../../General/Design styles/PlainContentPage.css';

//imported components
import TopNavigationBar from '../../General/Components/TopNav_Bar.jsx';
import BottomNavigationBar from '../../General/Components/BottomNav_Bar.jsx';
import PageHeaderLines from '../../General/Components/PageHeaderLines.jsx';
import PageHeaderImage from '../../General/Components/PageHeaderImage.jsx'
import ImageAndContent from '../../General/Components/ImageAndContent.jsx';

//imported content
import vappImage from './Content/vapp.png';
import vappImage2 from './Content/vapp_.png';
import headerImage from './Content/headerImage.jpg';  



import LinkUnderlined from '../../General/Components/LinkUnderlined.jsx';

export default function Symboolika() {
  return (
      <div className='plain3-container'>
          <div className='plain-bg-icons' />

          <div className='plain3-body'>
              <TopNavigationBar />


              <PageHeaderImage title="Sümboolika" image={headerImage} offsetY='30%'/>

              <ImageAndContent content={
                 <div>
                 <div className="mid-top-header">Vapp</div>
                 
                 
                 <div className="normal-text">
                    Liidu vapil on kuldsel kilbil kujutatud sinine ründav lõvi, 
                    kes hoiab paremas käpas sinise varrega Eesti lippu loomulikes värvides. 
                    Kilp on kinnitatud süüdatud tõrviku külge, mis on kujutatud loomutruult. 
                    Liidu motoks on “Vexillum signum libertatis”, mis tähendab ladinakeelest tõlgituna “Lipp on vabaduse sümbol”.
                 </div>
                 

                 


               </div>}
                
                images={[ 
                    vappImage
                ]}

                smallScreenImages={[vappImage2]}

                offsetY='20px'

                bgColor='transparent'
                scrollAspect='1.2'
              />




              <BottomNavigationBar />
          </div>
      </div>
  );
}
