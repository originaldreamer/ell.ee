import { useState } from 'react'
import './Liikmed.css'
import data from './Content/liikmeteKirjeldused.json'

//imported components
import TopNavigationBar from '../Esileht/Components/TopNav_Bar.jsx';
import BottomNavigationBar from '../Esileht/Components/BottomNav_Bar.jsx';
import LiikmeteGrid from './Components/LiikmeteGrid.jsx';
import LiikmeKirjeldus from './Components/LiikmeKirjeldus.jsx';
import LiikmedHeader from './Components/LiikmedHeader.jsx';

export default function Liikmed() {
  const [showKirjeldus, setShowKirjeldus] = useState(false);
  const [kirjelduseSisu, setKirjelduseSisu] = useState(data[0]);
  const [curKirjelduseSisuIndex, setCurKirjelduseSisuIndex] = useState(0);


  const changeShowKirjeldusState = (state) => {
      setShowKirjeldus(state);

      if (state) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
}

  const increaseKirjelduseContentIndex = () => {

    if (curKirjelduseSisuIndex === data.length - 1) {
      loadKirjeldusContent(0);
    } else {
      loadKirjeldusContent(curKirjelduseSisuIndex + 1); 
    }
  }

  const decreaseKirjelduseContentIndex = () => {

    if (curKirjelduseSisuIndex === 0) {
      loadKirjeldusContent(data.length - 1);
    } else {
      loadKirjeldusContent(curKirjelduseSisuIndex - 1); 
    }
  }

  const loadKirjeldusContent = (index) => {
      const selectedContent = data[index];
      setCurKirjelduseSisuIndex(index);
      setKirjelduseSisu(selectedContent); 
  };

  return (
      <div>
          <div className='liikmed-body'>
              <TopNavigationBar />

              <LiikmedHeader title="Liikmed"/>

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