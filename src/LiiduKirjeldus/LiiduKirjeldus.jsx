import { useState, useEffect } from 'react'
import './LiiduKirjeldus.css'

//imported components
import TopNavigationBar from '../General/Components/TopNav_Bar.jsx';
import BottomNavigationBar from '../General/Components/BottomNav_Bar.jsx';
import PageHeaderLines from '../General/Components/PageHeaderLines.jsx';
import PageHeaderImage from '../General/Components/PageHeaderImage.jsx'
import ImageAndContent from '../General/Components/ImageAndContent.jsx';

//imported content
import headerImage from './Content/liputoimkonnadReas.png'; 




export default function LiiduKirjeldus() {
  return (
      <div className='liiduKirjeldus-container'>
          <div className='liiduKirjeldus-bg' />

          <div className='liiduKirjeldus-body'>
              <TopNavigationBar />


              <PageHeaderImage title="Tutvustus" image={headerImage}/>

              <ImageAndContent content="tere" image={headerImage}/>


              <BottomNavigationBar />
          </div>
      </div>
  );
}
