import { useState } from 'react'
import '../../App.css'
import './LiikmeteGrid.css'



//imported logos
import koolimajaPilt from '../Design Elements/MURG liputoimkond.jpg'

import LiikmeTile from './LiikmeTile'



export default function LiikmeteGrid({clickFunction, layer}) 
{
    return (
        <div className='liikmeteGrid' style={{zIndex:layer}}>
            <LiikmeTile pilt={koolimajaPilt} pildiKirjeldus="Mustamäe Riigigümnaasiumi liputoimkond" title="Mustamäe Riigigümnaasium" handleClick={clickFunction}/>
            <LiikmeTile pilt={koolimajaPilt} pildiKirjeldus="Mustamäe Riigigümnaasiumi liputoimkond" title="Mustamäe Riigigümnaasium"/>
            <LiikmeTile pilt={koolimajaPilt} pildiKirjeldus="Mustamäe Riigigümnaasiumi liputoimkond" title="Mustamäe Riigigümnaasium"/>
            <LiikmeTile pilt={koolimajaPilt} pildiKirjeldus="Mustamäe Riigigümnaasiumi liputoimkond" title="Mustamäe Riigigümnaasium"/>
            <LiikmeTile pilt={koolimajaPilt} pildiKirjeldus="Mustamäe Riigigümnaasiumi liputoimkond" title="Mustamäe Riigigümnaasium"/>
        </div>
        
    );
}