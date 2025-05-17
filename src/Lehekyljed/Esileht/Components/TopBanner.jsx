import { useState, useEffect, useRef } from 'react';
import './TopBanner.css';
import '../../../index.css';

function Button({ text, handleClick }) {
  return (
    <div className='topBanner-button' onClick={handleClick}>
      <div className='mid-header-white topBanner-button-text'>{text}</div>
    </div>
  );
}

export default function TopBanner({ title, images, scrollToElement }) {
  const imageCount = images.length;
  const randomIndex = Math.floor(Math.random() * imageCount);

  const [curIndex, setCurIndex] = useState(randomIndex);
  const [nextIndex, setNextIndex] = useState((randomIndex + 1) % imageCount);
  const [switching, setSwitching] = useState(false);

  // renamed so it doesn’t shadow the prop
  const handleScrollClick = () => {
    if (scrollToElement?.current) {
      scrollToElement.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      console.log('scrolling to element');
    }
    console.log('presed');
  };

  const switchImage = () => {
    if (switching) return;
    setSwitching(true);
    setTimeout(() => {
      setCurIndex(nextIndex);
      setNextIndex((nextIndex + 1) % imageCount);
      setSwitching(false);
    }, 2150);
  };

  useEffect(() => {
    const id = setInterval(switchImage, 12000);
    return () => clearInterval(id);
  }, [curIndex, nextIndex, switching]); // include deps

  return (
    <div className='topBanner-container'>
      {switching && (
        <div className='topBanner-bg-top'>
          <img src={images[nextIndex]} alt='header' />
        </div>
      )}

      <div className='topBanner-bg' onClick={switchImage}>
        <img src={images[curIndex]} alt='header' />
      </div>

      <div className='topBanner-text'>
        <div className='big-header2-white' style={{ textAlign: 'center' }}>
          {title}
        </div>
      </div>

      <Button text='Meist' handleClick={handleScrollClick} />
    </div>
  );
}
