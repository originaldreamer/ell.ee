import { useState, useRef, useEffect, useCallback } from 'react';
import './ScrollImage.css';
import '../../index.css';

// imported components
import PiltideView from './PiltideView.jsx';

//imported elements
import scrollIcon from '../Design Elements/scrollIcon.svg';

function ClickableImage({ image, handleClick, offsetX, animate }) {
  return (
    <div
      className='scrollImage-image'
      style={{
        '--scroll-offset': offsetX,
        transition: animate ? 'transform 0.5s ease' : 'none',
      }}
    >
      <img src={image} onClick={handleClick} />
    </div>
  );
}

function Icon() {
  return (
    <div className='scrollImage-icon'>
      <img src={scrollIcon} alt='Scroll Icon' />
    </div>
  );
}

export default function ScrollImages({ images = [], offsetY = '0%' }) {
  const piltideCount = images.length;
  const [curIndex, setCurIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1 % piltideCount);
  const [curOffsetX, setCurOffsetX] = useState('0%');
  const [animate, setAnimate] = useState(true);
  //piltideView
  const [pildiIndex, setPildiIndex] = useState(0);
  const [curPilt, setCurPilt] = useState(images[0]);
  const [showPiltideView, setShowPiltideView] = useState(false);

  const setPilt = (index) => {
        setCurPilt(images[index]);
        setPildiIndex(index);  
    };

    const increasePildiIndex = () => {
        setPildiIndex(prevIndex => {
        const newIndex = prevIndex === images.length - 1 ? 0 : prevIndex + 1;
        setPilt(newIndex);
        return newIndex;
        });
    };

    const decreasePildiIndex = () => {
        setPildiIndex(prevIndex => {
        const newIndex = prevIndex === 0 ? images.length - 1 : prevIndex - 1;
        setPilt(newIndex);
        return newIndex;
        });
    };

    const changeShowPilditeViewState = (state) => {
    setShowPiltideView(state);
        
        if (state) {
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.documentElement.style.overflowY = 'auto';
        }
    }

  // wrap in useCallback so it has stable identity for useEffect below
  const switchImage = useCallback(() => {
    setAnimate(true);
    // wait one frame
    requestAnimationFrame(() => setCurOffsetX('-100%'));

    // after CSS transition (0.5s), swap & reset instantly
    setTimeout(() => {
      setAnimate(false);
      requestAnimationFrame(() => {
        setCurIndex(i => (i + 1) % piltideCount);
        setNextIndex(i => (i + 1) % piltideCount);
        setCurOffsetX('0%');
      });
    }, 500);
  }, [piltideCount]);

  // every 5s, call switchImage
  useEffect(() => {
    const handleKeyDown = (event) => {
        if (event.key === 'ArrowRight') {
          increasePildiIndex();
        }
        if (event.key === 'ArrowLeft') {
          decreasePildiIndex();
        }
        if (event.key === 'Escape') {
          changeShowPilditeViewState(false);
        }
      };
    
      window.addEventListener('keydown', handleKeyDown);

      
      let id;
        if (!showPiltideView && (piltideCount > 1)) {
            id = setInterval(switchImage, 6000);
        }

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        if (id) clearInterval(id);
      }; 

  }, [switchImage, showPiltideView]);

  return (
    <div className='scrollImage-container' style={{ marginTop: offsetY }}>
      <div className='scrollImage-images'>
        <ClickableImage
          image={images[curIndex]}
          handleClick={() => {
                changeShowPilditeViewState(true);
                setPilt(curIndex);
            }}
          offsetX={curOffsetX}
          animate={animate}
        />
        <ClickableImage
          image={images[nextIndex]}
          handleClick={() => {
            changeShowPilditeViewState(true);
            setPilt(nextIndex);
            }}
          offsetX={curOffsetX}
          animate={animate} 
        />
      </div>

      {piltideCount > 1 && <Icon />}

      {showPiltideView && <PiltideView 
            curIndex={pildiIndex}
            piltideCount={images.length}
            pilt={curPilt}
            leftFunction={() => decreasePildiIndex()}
            rightFunction={() => increasePildiIndex()}
            quitFunction={() => changeShowPilditeViewState(false)} 
        />}
    </div>
  );
}
