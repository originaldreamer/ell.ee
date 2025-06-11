import { useState, useEffect } from 'react'
import './Juhatus.css';

//imported components
import TopNavigationBar from '../../General/Components/TopNav_Bar.jsx';
import BottomNavigationBar from '../../General/Components/BottomNav_Bar.jsx';
import PageHeaderLines from '../../General/Components/PageHeaderLines.jsx';
import MidTextSeparator from '../../General/Components/MidTextSeparator.jsx';
import JuhatusLiigeGrid from './Components/JuhatusLiigeGrid.jsx';

 

export default function Juhatus() {

  return (
      <div className='juhatus-container'>
          <div className='juhatus-bg' />

          <div className='juhatus-body'> 
              <TopNavigationBar />

              <PageHeaderLines title="Juhatus"/>

              <MidTextSeparator
                text = {<div >
                    Meie liidu juhtorgan koosneb eestseisjast, laekahoidjast, kirjatoimetajast ja alalisest sekretärist. 
                    Nad vastutavad liidu järjepidevuse eest, koordineerivad koostööd uute koolidega,  
                    edendavad lipukultuuri, koolitavad uusi liputoimkondi ning toetavad nende tegevust. 
                </div>}
              
                textColor='black'
                bgColor='transparent'
                marginTop='0px'
              />

              

              <JuhatusLiigeGrid/>


              

              <BottomNavigationBar />
          </div>
      </div>
  );
} 