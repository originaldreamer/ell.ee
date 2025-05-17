import { useEffect, useState } from 'react';

import './UudisLehtHeader.css';
import '../../../index.css'

import PiltideView from '../../../General/Components/PiltideView.jsx';

export default function UudisLehtHeader({ title, date, pilt, pildiAutor }) {
    const [showPiltideView, setShowPiltideView] = useState(false);

    const changeShowPilditeViewState = (state) => {
        setShowPiltideView(state);
        if (state) {
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.documentElement.style.overflowY = 'auto';
        }
    }

    useEffect(() => {
        const handleKeyDown = (event) => {
          if (event.key === 'Escape') {
            changeShowPilditeViewState(false);
          }
        };
      
        window.addEventListener('keydown', handleKeyDown);
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }, []);

    return (
        <div className='uudisLehtHeader-container'>
            <div className='uudisLehtHeader-bg' />

            <div className='uudisLehtHeader'>
                <div className='uudisLehtHeader-line1' />

                <div className='big-header2 uudisLehtHeader-title' >{title}</div>

                <div className='uudisLehtHeader-line' />
                
                <div className='uudisLehtHeader-date'>
                    <div className='small-text' style={{color: '#EFA900'}}>{date}</div>

                </div>
                
                <img className='uudisLehtHeader-pilt' onClick={() => changeShowPilditeViewState(true)} src={pilt} style={{width: '100%'}}/>
                
                {pildiAutor && 
                    <div className='uudisLehtHeader-pildiAutor'>
                        <div className='small-text' style={{color: '#EFA900'}}>Foto: {pildiAutor}</div>
                    </div>
                }
                
                {showPiltideView && <PiltideView 
                    curIndex={0}
                    piltideCount={1}
                    pilt={pilt}
                    leftFunction={() => {}}
                    rightFunction={() => {}}
                    quitFunction={() => changeShowPilditeViewState(false)} 
                />}
                
            </div> 
        </div>
        

    );
}