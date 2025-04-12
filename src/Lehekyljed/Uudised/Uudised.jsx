import { useState, useEffect } from 'react'
import './Uudised.css';

//imported components
import TopNavigationBar from '../../General/Components/TopNav_Bar.jsx';
import BottomNavigationBar from '../../General/Components/BottomNav_Bar.jsx';
import PageHeaderImage from '../../General/Components/PageHeaderImage.jsx';
import UudisedTilesGrid from './Components/UudisedTilesGrid.jsx';
import PageNavigatorButtons from '../../General/Components/PageNavigatorButtons.jsx';

//imported content
import uudisedHeaderImage from './Content/uudisedHeader.jpg'

//imported data
import uudised_data from './Content/Uudised.json'

export default function Uudised() {

    const [curPageIndex, setCurPageIndex] = useState(0);
    const maxElementsPerPage = 12;
    const pageCount = Math.ceil(uudised_data.length / maxElementsPerPage);


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
      <div className='uudised-container'>
          <div className='uudised-bg' />

          <div className='uudised-body'> 
              <TopNavigationBar />

              <PageHeaderImage title="Uudised" image={uudisedHeaderImage} offsetY='52%'/>

              <UudisedTilesGrid uudised={uudised_data} curPageIndex={curPageIndex} maxElementsPerPage={maxElementsPerPage}/>

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