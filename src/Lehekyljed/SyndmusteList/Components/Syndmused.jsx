import { useState, useEffect } from 'react'
import './Syndmused.css'
import '../../../index.css'

import Syndmus from './Syndmus.jsx';






export default function Syndmused({syndmused, curPageIndex,maxElementsPerPage}) {
  const startIndex = curPageIndex * maxElementsPerPage;
  const endIndex = startIndex + maxElementsPerPage;
  

  return (
      <div className='Syndmused-container'>

        {syndmused.slice(startIndex, endIndex).map((syndmus, index) => (
          <Syndmus
            key={index}
            pealkiri={syndmus.pealkiri}
            kuupaev={syndmus.kuupaev}
            asukoht={syndmus.asukoht}
            kellaaeg={syndmus.kellaaeg}
            kirjeldus={syndmus.kirjeldus}
          />
        ))} 

          
          
      </div>
  );
}
