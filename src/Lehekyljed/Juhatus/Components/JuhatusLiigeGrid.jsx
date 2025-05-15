import {usestate} from 'react'
import '../../../index.css'
import './JuhatusLiigeGrid.css'


import JuhatusLiige from './JuhatusLiige.jsx';
 
//imported content
import tempinimene from '../Content/tempInimene.jpg'
import data from '../Content/juhatuseLiikmed.json'

export default function JuhatusLiigeGrid() {
    return (
        <div className='juhatusLiigeGrid-container'>
            <div className='juhatusLiigeGrid-elemendid'>
                {data.map((liige, i) => (
                    <JuhatusLiige
                        key={i}
                        pilt={tempinimene}
                        roll={liige.roll}
                        nimi={liige.nimi}
                        kool={liige.kool}
                        meil={liige.meil}
                        telefon={liige.telefon}
                    />
                ))}
            </div>
            
        </div>
    );
} 
