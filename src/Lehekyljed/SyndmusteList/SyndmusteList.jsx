import { useState, useEffect } from 'react'
import './SyndmusteList.css'


//imported components
import TopNavigationBar from '../../General/Components/TopNav_Bar.jsx';
import BottomNavigationBar from '../../General/Components/BottomNav_Bar.jsx';
import PageHeaderImage from '../../General/Components/PageHeaderImage.jsx';
import Syndmused from './Components/Syndmused.jsx';
import PageNavigatorButtons from '../../General/Components/PageNavigatorButtons.jsx';

//imported content
import puitTaust from './Design elements/puit.png'
import data from './Content/Syndmused.json'

export default function SyndmusteList() {
  const syndmused=data;
  

  const [curPageIndex, setCurPageIndex] = useState(0);
  const maxElementsPerPage = 15;
  const pageCount = Math.ceil(syndmused.length / maxElementsPerPage);


  const decreaseCurPageIndex = () => {
    if (curPageIndex > 0)
    {
      setCurPageIndex(curPageIndex-1)
    }
  };

  const increaseCurPageIndex = () => {
    if (curPageIndex < pageCount-1)
    {
      setCurPageIndex(curPageIndex+1)
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0});
  }, [curPageIndex]);

 
  


  return (
      <div className='SyndmusteList-container'>
          <div className='SyndmusteList-bg' />

          <div className='SyndmusteList-body'>
              <TopNavigationBar />

              <PageHeaderImage title="Kalender" image={puitTaust} offsetY='100%' titleAlignment="left"/>
              

              <Syndmused 
                maxElementsPerPage={maxElementsPerPage}
                curPageIndex={curPageIndex}
                syndmused={syndmused}
              />

              <PageNavigatorButtons 
                curSelectedIndex={curPageIndex} 
                setPageIndex={setCurPageIndex} 
                nuppudeCount={pageCount} 
                leftArrowFunction={decreaseCurPageIndex} 
                righArrowFunction={increaseCurPageIndex}
              />



              <BottomNavigationBar />
          </div>
      </div>
  );
}
