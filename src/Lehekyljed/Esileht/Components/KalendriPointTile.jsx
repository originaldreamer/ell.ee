import { useState, useEffect } from 'react'
import './KalendriPointTile.css'
import '../../../index.css'

//imported elements
import FlagIcon from '../Design elements/FlagIcon.svg'
import PageHeaderLines from '../../../General/Components/PageHeaderLines'


function Kuupaev({date})
{
    const [paevaIndex, kuuIndex, aastaIndex] = date.split('.'); 
    const dateObj = new Date(`${kuuIndex}/${paevaIndex}/${aastaIndex}`);

    // Array of month names in Estonian
    const months = ["jaan.", "veeb.", "märts", "aprill", "mai", "juuni", "juuli", "aug.", "sept.", "okt.", "nov.", "dets."];

    // Array of day names in Estonian
    const days = ["P", "E", "T", "K", "N", "R", "L"];

    // Get the month name and day name in Estonian
    const kuu = months[dateObj.getMonth()]; // Month (e.g., "Märts")
    const paev = days[dateObj.getDay()]; // Day name (e.g., "Esmaspäev") 

    return (
        <div className='kalendriPointTile-kuupaev'>
            <div className='long-sub-header-white'> {paev}, </div>
            <div className='mid-header-white' style={{marginTop:'4px', marginBottom:'2px'}}> {paevaIndex}. </div>
            <div className='long-sub-header-white'> {kuu} </div>
        </div>
    )
}






export default function kalendriPointTile({pealkiri, kuupaev, asukoht}) {
  return (
      <div className='kalendriPointTile-container'>
          
        <Kuupaev date={kuupaev} />
        <div className='kalendriPointTile-sisu'>
            <div className='kalendriPointTile-pealkiri sub-header-white'>{pealkiri}</div>

            {asukoht && <div className='kalendriPointTile-detail'>
                <img src={FlagIcon}  style={{ width: '39px' }} />
                <div className='long-small-text kalendriPointTile-detail-text'>{asukoht}</div >
            </div>}
        </div> 
        

        
          
          
      </div>
  );
}
