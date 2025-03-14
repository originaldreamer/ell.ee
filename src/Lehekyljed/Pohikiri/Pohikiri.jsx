import { useState, useEffect } from 'react'
import '../../General/Design styles/PlainContentPage.css'
import '../../index.css';

//imported components
import TopNavigationBar from '../../General/Components/TopNav_Bar.jsx';
import BottomNavigationBar from '../../General/Components/BottomNav_Bar.jsx';
import PageHeaderPlain from '../../General/Components/PageHeaderPlain.jsx';
import PohikiriSisu from './Components/PohikiriSisu.jsx';




export default function Pohikiri() {

  return (
      <div className='plain-container'>
          <div className='plain-bg' />



          <div className='plain-body'>
              <TopNavigationBar />


              <PageHeaderPlain title="Põhikiri"/>
            
              <PohikiriSisu />
              


              <BottomNavigationBar />
          </div>
      </div>
  );
}