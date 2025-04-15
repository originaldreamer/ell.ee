import {usestate} from 'react'
import '../../../index.css'
import './JuhatusLiigeGrid.css'


import JuhatusLiige from './JuhatusLiige.jsx';

//imported content
import tempinimene from '../Content/tempInimene.jpg'

export default function JuhatusLiigeGrid() {
    return (
        <div className='juhatusLiigeGrid-container'>
            <div className='juhatusLiigeGrid-elemendid'>
                {[...Array(10)].map((_, i) => (
                    <JuhatusLiige
                        key={i}
                        pilt={tempinimene}
                        roll="Roll"
                        nimi="Kellegi Nimi"
                        kool="Tallinna Mustamäe Riigigümnaasium"
                        meil="kellegi.nimi@edu.gmail.com"
                    />
                ))}
            </div>
            
        </div>
    );
}
