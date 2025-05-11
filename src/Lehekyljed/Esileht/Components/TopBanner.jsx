import { useState, useEffect } from 'react';
import './TopBanner.css';
import '../../../index.css';

function Button({text, handleClick})
{

    return (
        <div className='topBanner-button'
            onClick={handleClick}
        >
            <div className='mid-header-white topBanner-button-text'>{text}</div>
        </div>
    )
}

export default function TopBanner({title,images}) {
    const imageCount = images.length;
    // pick a random starting index
    const randomIndex = Math.floor(Math.random() * imageCount);

    const [curIndex, setCurIndex] = useState(randomIndex);
    const [nextIndex, setNextIndex] = useState((randomIndex + 1) % imageCount);
    const [switching, setSwitching] = useState(false);

  const switchImage = () => {
    if (switching) {return;}

    setSwitching(true);

    setTimeout(() => {
        setCurIndex(nextIndex);
        setNextIndex((nextIndex + 1) % imageCount);
        setSwitching(false);
      }, 2150); 
  }


  useEffect(() => {
      let id = setInterval(switchImage, 12000);

      return () => {
        clearInterval(id);
      };

  }, [switchImage]);


  return (
    <div className='topBanner-container'>
        {switching && 
            <div className='topBanner-bg-top'>
                <img src={images[nextIndex]}  alt="header" />
            </div>
        }
        
        <div 
          className='topBanner-bg'
          onClick={switchImage}
        >
            <img src={images[curIndex]}  alt="header" />
        </div>

      

      <div className='topBanner-text'>
        <div className='big-header2-white' style={{ textAlign: 'center' }}>
          {title}
        </div>
      </div>
      <Button text="Meist" handleClick={() => window.location.href = './ajalugu'}/>

    </div>
  );
}
