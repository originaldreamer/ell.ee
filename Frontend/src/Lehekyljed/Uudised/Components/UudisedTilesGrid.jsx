import { useState, useEffect } from 'react'
import './UudisedTilesGrid.css';

//imported components
import UudisedTile from './UudisedTile.jsx';


//imported temp content
import otherUudis1 from '../../UudisLeht/Content/other uudis 1.jpg'
import otherUudis2 from '../../UudisLeht/Content/other uudis 2.jpg';
import otherUudis3 from '../../UudisLeht/Content/other uudis 3.jpg';
import otherUudis4 from '../../UudisLeht/Content/other uudis 4.jpg'
import otherUudis5 from '../../UudisLeht/Content/other uudis 5.jpg';
import otherUudis6 from '../../UudisLeht/Content/other uudis 6.jpg';






export default function UudisedTilesGrid({uudised, curPageIndex,maxElementsPerPage}) {
    const startIndex = curPageIndex * maxElementsPerPage;
    const endIndex = startIndex + maxElementsPerPage;
    const pildid = [otherUudis1, otherUudis2, otherUudis3, otherUudis4, otherUudis5, otherUudis6];

  return (
      <div className='UudisedTilesGrid-container'>

          <div className='UudisedTilesGrid-elemendid' >

            {uudised.slice(startIndex, Math.min(endIndex, uudised.length - 1)).map((uudis, index) => (
                <UudisedTile
                key={index}
                pilt={pildid[(index+startIndex)%6]}
                date={uudis.date}
                title={uudis.title}
                sisu={uudis.sisu}
                to='./uudisview'
                />
            ))}




          </div>
      </div>
  );
}