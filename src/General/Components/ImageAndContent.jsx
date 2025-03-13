import { useState, useEffect } from 'react'
import './ImageAndContent.css'
import '../../index.css'

//imported components
import PiltideView from './PiltideView';




function ClickableImage({ image, handleClick}) {
  return (
    <div className='imageAndContent-image'>
      <img src={image} onClick={handleClick}/>
    </div>
  );
}

function ImageGrid({ images }) {
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
        document.documentElement.style.overflow = 'auto';
      }
}

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
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (



      <div className='imageAndContent-imageGrid'>
        {images.map((pilt, index) => (
          <ClickableImage 
            key={index} 
            image={pilt} 
            handleClick={() => {
              changeShowPilditeViewState(true);
              setPilt(index);
          }}/>
        ))}

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



export default function ImageAndContent({content, images, reverse=false, bgColor='transparent'}) {
  return (
      <div className='imageAndContent-container'>
        <div className='imageAndContent-bg' style={{backgroundColor: bgColor}}/>
        
        {reverse ? (
        <div className='imageAndContent-sisu'>
          <ImageGrid images={images} />
          <div className='imageAndContent-content'>
            {content}
          </div>
        </div>
      ) : (
        <div className='imageAndContent-sisu'>
          <div className='imageAndContent-content'>
            {content}
          </div>
          <ImageGrid images={images} />
        </div>
      )}

      </div>
  );
}
