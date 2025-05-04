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
  const [curIndex, setCurIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [switching , setSwitching] = useState(false);
  const imageCount = images.length;

  const switchImage = () => {
    if (switching) {return;}

    setSwitching(true);

    setTimeout(() => {
        setCurIndex(nextIndex);
        setNextIndex((nextIndex + 1) % imageCount);
        setSwitching(false);
      }, 3000); 
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
        
        <div className='topBanner-bg'>
            <img src={images[curIndex]}  alt="header" />
        </div>

      

      <div className='topBanner-text'>
        <div className='big-header2-white' style={{ textAlign: 'center' }}>
          {title}
        </div>
      </div>
      <Button text="Meist" handleClick={() => window.location.href = './tutvustus'}/>

    </div>
  );
}
