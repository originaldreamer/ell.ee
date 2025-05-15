import { useState, useEffect } from 'react';
import './Galerii.css';

import TopNavigationBar from '../../General/Components/TopNav_Bar.jsx';
import BottomNavigationBar from '../../General/Components/BottomNav_Bar.jsx';
import PageHeaderImage from '../../General/Components/PageHeaderImage.jsx';
import GaleriiSyndmusGrid from './Components/GaleriiSyndmusGrid.jsx';
import PageNavigatorButtons from '../../General/Components/PageNavigatorButtons.jsx';
import data from './Content/galeriiData.json';

/*imported images*/
import headerImage from './DesignElements/camera.jpg';



export default function Galerii() {
    const syndmused=data;
  
    const [curPageIndex, setCurPageIndex] = useState(0);
    const maxElementsPerPage = 20;
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
        <div className='galerii-container'>
            <div className='galerii-bg' />

            <div className='galerii-body'> 
                <TopNavigationBar />

                <PageHeaderImage title="Galerii" image={headerImage} offsetY='90%' titleAlignment="center"/>

                <GaleriiSyndmusGrid 
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
