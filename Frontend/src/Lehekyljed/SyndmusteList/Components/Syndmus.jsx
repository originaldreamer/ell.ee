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
            {koht && <div className='Syndmus-detail'>
                <img src={FlagIcon}  style={{ width: '39px' }} />
                <div className='long-small-text Syndmus-detail-text'>{koht}</div >
            </div>}
            
            {aeg && <div className='Syndmus-detail'>
                <img src={WatchIcon}  style={{ width: '30px', marginLeft: '2px' }} />
                <div className='long-small-text Syndmus-detail-text'>{aeg}</div >
            </div>}
        </div>
    );
}

function formatDate(inputDate) {
  const date = new Date(inputDate);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}

export default function Syndmus({pealkiri, kuupaev, asukoht, kellaaeg, kirjeldus}) {
    const formattedKuupaev = formatDate(kuupaev);
  

  return (
      <div className='Syndmus-container'>
          <div className='Syndmus-line' />

          <div className='Syndmus-sisu'>
            <Kuupaev date={formattedKuupaev} />

            <div className='Syndmus-kirjeldus'>
                <div className='mid-small-header Syndmus-kirjeldus-pealkiri' style={{marginTop: 0}}> {pealkiri} </div >

                <Details koht={asukoht} aeg={kellaaeg}/>


                {kirjeldus.map((punkt, index) => (
                    <div key={index} className="bulletPoint small-text Syndmus-kirjeldus-alapunkt">
                        {punkt}
                    </div>
                ))}
                
            

            </div>
          </div>

          
          
      </div>
  );
}
