import { useState, useEffect } from 'react'
import './Pohikiri.css';
import '../index.css';

//imported components
import TopNavigationBar from '../General/Components/TopNav_Bar.jsx';
import BottomNavigationBar from '../General/Components/BottomNav_Bar.jsx';
import PageHeaderPlain from '../General/Components/PageHeaderPlain.jsx';
import PohikiriSisu from './Components/PohikiriSisu.jsx';




export default function Pohikiri() {

  return (
      <div className='pohikiri-container'>
          <div className='pohikiri-bg' />

          <div className='pohikiri-body'>
              <TopNavigationBar />


              <PageHeaderPlain title="Põhikiri"/>

              <PohikiriSisu />


              <BottomNavigationBar />
          </div>
      </div>
  );
}