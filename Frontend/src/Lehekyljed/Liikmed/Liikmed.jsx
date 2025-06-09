import { useState, useEffect } from 'react'
import './Liikmed.css'
import data from './Content/liikmeteKirjeldused.json'

//imported components
import TopNavigationBar from '../../General/Components/TopNav_Bar.jsx';
import BottomNavigationBar from '../../General/Components/BottomNav_Bar.jsx';
import LiikmeteGrid from './Components/LiikmeteGrid.jsx';
import LiikmeKirjeldus from './Components/LiikmeKirjeldus.jsx';
import PageHeaderLines from '../../General/Components/PageHeaderLines.jsx';
 


export default function Liikmed() {
  const [showKirjeldus, setShowKirjeldus] = useState(false);
  const [kirjelduseSisu, setKirjelduseSisu] = useState(data[0]);
  const [curKirjelduseSisuIndex, setCurKirjelduseSisuIndex] = useState(0);

  const loadKirjeldusContent = (index) => {
    const selectedContent = data[index];
    setCurKirjelduseSisuIndex(index);
    setKirjelduseSisu(selectedContent); 
};



  const changeShowKirjeldusState = (state) => {
      setShowKirjeldus(state);

      if (state) {
        document.documentElement.style.overflow = 'hidden';
      } else {
        document.documentElement.style.overflowY = 'auto';
      }
}

    const increaseKirjelduseContentIndex = () => {
        setCurKirjelduseSisuIndex(prevIndex => {
        const newIndex = prevIndex === data.length - 1 ? 0 : prevIndex + 1;
        setKirjelduseSisu(data[newIndex]);
        return newIndex;
        });
    };

    const decreaseKirjelduseContentIndex = () => {
        setCurKirjelduseSisuIndex(prevIndex => {
        const newIndex = prevIndex === 0 ? data.length - 1 : prevIndex - 1;
        setKirjelduseSisu(data[newIndex]);
        return newIndex;
        });
    };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        increaseKirjelduseContentIndex();
      }
      if (event.key === 'ArrowLeft') {
        decreaseKirjelduseContentIndex();
      }
      if (event.key === 'Escape') {
        changeShowKirjeldusState(false);
      }
    };
  
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  

  return (
      <div className='liikmed-container'>
          <div className='liikmed-bg' />

          <div className='liikmed-body'>
              <TopNavigationBar />


              <PageHeaderLines title="Liikmed"/>

              <LiikmeteGrid 
                functionShowKirjeldus={() => changeShowKirjeldusState(true)} 
                loadContentFunction={loadKirjeldusContent}
              />

              {showKirjeldus && (
                  <LiikmeKirjeldus 
                      turnOffKirjeldus={() => changeShowKirjeldusState(false)}
                      content={kirjelduseSisu}
                      moveLeft={decreaseKirjelduseContentIndex}
                      moveRight={increaseKirjelduseContentIndex}
                  />
              )}


              <BottomNavigationBar />
          </div>
      </div>
  );
}