import { useState, useEffect } from 'react'
import './Syndmus.css'
import '../../../index.css'


/*imported elements*/
import FlagIcon from '../Design elements/FlagIcon.svg'
import WatchIcon from '../Design elements/WatchIcon.svg'


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
        <div className='Syndmus-kuupaev'>
            <div className='long-sub-header-white'> {paev}, </div>
            <div className='mid-header-white' style={{marginTop:'4px', marginBottom:'2px'}}> {paevaIndex}. </div>
            <div className='long-sub-header-white'> {kuu} </div>
        </div>
    )
}

function Details({koht, aeg})
{
    return (
        <div className='Syndmus-details'>
            <div className='Syndmus-detail'>
                <img src={FlagIcon}  style={{ width: '39px' }} />
                <div className='long-small-text'>{koht}</div >
            </div>
            
            <div className='Syndmus-detail'>
                <img src={WatchIcon}  style={{ width: '30px' }} />
                <div className='long-small-text'>{aeg}</div >
            </div>
        </div>
    );
}



export default function Syndmus({pealkiri, kuupaev, asukoht, kellaaeg, kirjeldus}) {

  

  return (
      <div className='Syndmus-container'>
          <div className='Syndmus-line' />

          <div className='Syndmus-sisu'>
            <Kuupaev date={kuupaev} />

            <div className='Syndmus-kirjeldus'>
            <div className='mid-small-header' style={{marginTop: 0}}> {pealkiri} </div >

            <Details koht={asukoht} aeg={kellaaeg}/>

            <div className='small-text'> {kirjeldus} </div>
            </div>
          </div>

          
          
      </div>
  );
}
