import { useState } from 'react'
import './LiikmeteGrid.css'

import data from '../Content/liikmeteKirjeldused.json'



//imported logos
import koolimajaPilt from '../Design Elements/MURG liputoimkond.jpg'

import LiikmeTile from './LiikmeTile'



export default function LiikmeteGrid({functionShowKirjeldus, loadContentFunction}) 
{
    return (
        <div className='liikmeteGrid'>
            {[...Array(data.length)].map((_, index) => (
                <LiikmeTile 
                    key={index}  // Ensure each component has a unique key
                    pilt={koolimajaPilt} 
                    index={index}  // Pass the increasing index value
                    handleClick={() => { 
                        functionShowKirjeldus(); 
                        loadContentFunction(index);  // Pass the corresponding index
                    }}
                />
            ))}
        </div>
        
    );
}