import {usestate} from 'react'
import '../../../index.css'
import './GaleriiSyndmusGrid.css'


import GaleriiSyndmusTile from './GaleriiSyndmusTile';

//imported content
import tempImage from '../DesignElements/pilt1.jpg';
import data from '../Content/galeriiData.json';

export default function GaleriiSyndmusGrid({curPageIndex,maxElementsPerPage}) {
    const startIndex = curPageIndex * maxElementsPerPage;
    const endIndex = startIndex + maxElementsPerPage;


    return (
        <div className='galeriiSyndmusGrid-container'>
            <div className='galeriiSyndmusGrid-elemendid'>
                {data.slice(startIndex, endIndex).map((syndmus, i) => (
                    <GaleriiSyndmusTile
                        key={i}
                        pilt={tempImage}
                        title = {syndmus.title}
                        pildistaja={syndmus.pildistaja}
                        kuupaev={syndmus.kuupaev}

                        handleClick={() => window.location.href = '/pildid'} 
                    />
                    
                ))}
            </div>
            
        </div>
    );
}
