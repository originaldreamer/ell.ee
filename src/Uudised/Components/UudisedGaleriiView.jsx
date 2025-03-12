import { useState } from 'react';
import '../../index.css';
import './UudisedGaleriiView.css'



//imported elements
import arrowLeft from '../Design elements/arrow left white.svg';
import arrowLeftActivated from '../Design elements/arrow left yellow.svg';
import arrowRight from '../Design elements/arrow right white.svg';
import arrowRightActivated from '../Design elements/arrow right yellow.svg';
import quitIcon from '../Design elements/quit icon.svg';
import quitIconActivated from '../Design elements/quit icon activated.svg';



function Interactable({normalIcon, activatedIcon, handleClick}) {
    const [icon, setIcon] = useState(normalIcon);

    return (
        <img
            className='UudisedGaleriiView-interactable'
            onMouseEnter={() => setIcon(activatedIcon)}
            onMouseLeave={() => setIcon(normalIcon)}  
            onClick={handleClick}
            src={icon}         
        />
    );
}

export default function UudisedGaleriiView({curIndex, piltideCount, pilt, leftFunction, rightFunction, quitFunction}) {
    
    return (
        <div className='UudisedGaleriiView-container'>
            <div className='UudisedGaleriiView-bg' />
            <img className='UudisedGaleriiView-pilt' src={pilt}/>

            <div className='UudisedGaleriiView-leftArrow'><Interactable normalIcon={arrowLeft} activatedIcon={arrowLeftActivated} handleClick={leftFunction}/></div>
            <div className='UudisedGaleriiView-rightArrow'><Interactable normalIcon={arrowRight} activatedIcon={arrowRightActivated} handleClick={rightFunction}/></div>
            <div className='UudisedGaleriiView-quitIcon'><Interactable normalIcon={quitIcon} activatedIcon={quitIconActivated}handleClick={quitFunction}/></div>

            <div className='UudisedGaleriiView-kirjeldus'>
                <div className='UudisedGaleriiView-text'>{pilt.split('/').pop().replace(/\.[^/.]+$/, '')}</div>
                <div className='UudisedGaleriiView-text'>({curIndex+1}/{piltideCount})</div>
            </div>
        
        </div>
        
    );

}