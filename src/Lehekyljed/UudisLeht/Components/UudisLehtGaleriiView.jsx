import { useState } from 'react';
import '../../../index.css';
import './UudisLehtGaleriiView.css'



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
            className='UudisLehtGaleriiView-interactable'
            onMouseEnter={() => setIcon(activatedIcon)}
            onMouseLeave={() => setIcon(normalIcon)}  
            onClick={handleClick}
            src={icon}         
        />
    );
}

export default function UudisLehtGaleriiView({curIndex, piltideCount, pilt, leftFunction, rightFunction, quitFunction}) {
    
    return (
        <div className='UudisLehtGaleriiView-container'>
            <div className='UudisLehtGaleriiView-bg' />
            <img className='UudisLehtGaleriiView-pilt' src={pilt}/>

            <div className='UudisLehtGaleriiView-leftArrow'><Interactable normalIcon={arrowLeft} activatedIcon={arrowLeftActivated} handleClick={leftFunction}/></div>
            <div className='UudisLehtGaleriiView-rightArrow'><Interactable normalIcon={arrowRight} activatedIcon={arrowRightActivated} handleClick={rightFunction}/></div>
            <div className='UudisLehtGaleriiView-quitIcon'><Interactable normalIcon={quitIcon} activatedIcon={quitIconActivated}handleClick={quitFunction}/></div>

            <div className='UudisLehtGaleriiView-kirjeldus'>
                <div className='UudisLehtGaleriiView-text'>{pilt.split('/').pop().replace(/\.[^/.]+$/, '').split('-')[0]}</div>
                <div className='UudisLehtGaleriiView-text'>({curIndex+1}/{piltideCount})</div> 
            </div>
        
        </div>
        
    );

}