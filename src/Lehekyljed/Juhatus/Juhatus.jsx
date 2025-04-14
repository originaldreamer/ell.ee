import { useState, useEffect } from 'react'
import './Juhatus.css';

//imported components
import TopNavigationBar from '../../General/Components/TopNav_Bar.jsx';
import BottomNavigationBar from '../../General/Components/BottomNav_Bar.jsx';
import PageHeaderLines from '../../General/Components/PageHeaderLines.jsx';
import MidTextSeparator from '../../General/Components/MidTextSeparator.jsx';

//imported content



export default function Juhatus() {

  return (
      <div className='juhatus-container'>
          <div className='juhatus-bg' />

          <div className='juhatus-body'> 
              <TopNavigationBar />

              <PageHeaderLines title="Juhatus"/>

              <MidTextSeparator
                text = {<div >
                    Eesti Koolide Liputoimkondade Liidu juhatus juhib igapäevast tegevust. <br />
                    Liidu eesmärk on edendada lipukultuuri koolides. <br />
                    Juhatus koolitab uusi liputoimkondi ja toetab olemasolevaid. <br />
                    Korraldatakse üritusi ja arendatakse koostööd teiste organisatsioonidega.
                </div>}
              
                textColor='#F5F5F5'
                bgColor='rgba(44, 62, 80, 0.25)'
                marginTop='70px'
              />

              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>

              

              <BottomNavigationBar />
          </div>
      </div>
  );
} 