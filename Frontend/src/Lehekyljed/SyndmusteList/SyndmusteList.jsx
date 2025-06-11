import { useState, useEffect } from 'react'
import './SyndmusteList.css'


//imported components
import TopNavigationBar from '../../General/Components/TopNav_Bar.jsx';
import BottomNavigationBar from '../../General/Components/BottomNav_Bar.jsx';
import PageHeaderImage from '../../General/Components/PageHeaderImage.jsx';
import Syndmused from './Components/Syndmused.jsx';
import PageNavigatorButtons from '../../General/Components/PageNavigatorButtons.jsx';

//imported content
import headerImage from './Design elements/kalenderHeader.jpg'
import data from './Content/Syndmused.json'

export default function SyndmusteList() {
  const [syndmused, setSyndmused] = useState([]);
  

  const [curPageIndex, setCurPageIndex] = useState(0);
  const maxElementsPerPage = 15;
  const pageCount = Math.ceil(data.length / maxElementsPerPage);


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
    fetch('http://localhost:8081/syndmused')
    .then(res => res.json())
    .then(data => setSyndmused(data))
    .catch(err => console.log(err));

    window.scrollTo({ top: 0});
  }, [curPageIndex]);

 
  


  return (
      <div className='SyndmusteList-container'>
          <div className='SyndmusteList-bg' />

          <div className='SyndmusteList-body'>
              <TopNavigationBar />

              <PageHeaderImage title="Kalender" image={headerImage} offsetY='71%' titleAlignment="left"/>
              

              <Syndmused 
                maxElementsPerPage={maxElementsPerPage}
                curPageIndex={curPageIndex}
                syndmused={data}
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
