import { usestate, useEffect } from 'react';
import './GaleriiLeht.css';
import '../../index.css';

import TopNavigationBar from '../../General/Components/TopNav_Bar.jsx';
import BottomNavigationBar from '../../General/Components/BottomNav_Bar.jsx';
import PageHeaderImage from '../../General/Components/PageHeaderImage.jsx';
import MidTextSeparator from '../../General/Components/MidTextSeparator.jsx';
import PildidGaleriiGrid from './Components/PildidGaleriiGrid.jsx';
import LinkUnderlined from '../../General/Components/LinkUnderlined.jsx';

/*imported images*/
import pilt1 from './DesignElements/pildinimi1_pildistaja.jpg';
import pilt2 from './DesignElements/pildinimi2_pildistaja.jpg';
import pilt3 from './DesignElements/pildinimi3_pildistaja.jpg';
import pilt4 from './DesignElements/pildinimi4_pildistaja.jpg';
import pilt5 from './DesignElements/pildinimi5_pildistaja.jpg';
import headerImage from './DesignElements/camera.jpg';

import tagasiIconNormal from './DesignElements/tagasiIcon.svg';
import tagasiIconActivated from './DesignElements/tagasiIcon activated.svg';



export default function GaleriiLeht() {

    return (
        <div className='galeriiLeht-container'>
            <div className='galeriiLeht-bg' />

            <div className='galeriiLeht-body'> 
                <TopNavigationBar />

                <PageHeaderImage title="Galerii" image={headerImage} offsetY='90%' titleAlignment="center"/>

                <MidTextSeparator
                    text = {<div >
                        Sündmuse nimi - käisime üritusel, mis toimus 2023. aastal. <br />
                        lisainfot siin kirjas on. Seal oli tore olla 
                        <br/>
                        <br/>
                        <LinkUnderlined
                            display = {<div className='galeriiLeht-tagasi'>Tagasi <img src={tagasiIconNormal}/> </div>}
                            displayHovered = {<div className='galeriiLeht-tagasi'>Tagasi <img src={tagasiIconActivated}/> </div>}
                            to='/galerii'
                        />
                    </div>}
                    
                    textColor='black'
                    bgColor='transparent'
                    marginTop='-10px'
                />

                <PildidGaleriiGrid
                    pildid={[pilt1, pilt2, pilt3, pilt4, pilt5,pilt1, pilt2, pilt3, pilt4, pilt5,pilt1, pilt2, pilt3, pilt4, pilt5]}
                />

                <BottomNavigationBar />
            </div>
        </div>
    );

}
