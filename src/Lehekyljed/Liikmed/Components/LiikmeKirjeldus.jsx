import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import useIsTouchDevice from '/src/hooks/useIsTouchDevice.jsx';
import '../../../App.css'
import './LiikmeKirjeldus.css'

//imported elements
import facebookLogoWhite from '../../../assets/General/facebook logo white.svg'
import facebookLogoYellow from '../../../assets/General/faceook logo yellow.svg'
import instagramLogoWhite from '../../../assets/General/instagram logo white.svg'
import instagramLogoYellow from '../../../assets/General/instagram logo yellow.svg'
import arrowLeftWhite from '../Design Elements/arrow left white.svg'
import arrowLeftYellow from '../Design Elements/arrow left yellow.svg'
import arrowRightWhite from '../Design Elements/arrow right white.svg'
import arrowRightYellow from '../Design Elements/arrow right yellow.svg'
import quitIcon from '../Design Elements/quit icon.svg';
import quitIconActivated from '../Design Elements/quit icon activated.svg';





//later do from datasheet

import koolimajaPilt from '../Design Elements/MURG liputoimkond.jpg'



/*if link == "none", then don't render that symbol"*/
function SotsMeediaLingid({instagramLink, facebookLink})
{
    return (
        <div className='sotsMeediaLingid'>
            {instagramLink !== "none" && (
                <SotsiaalMeedia symbolNormal={instagramLogoWhite} symbolClicked={instagramLogoYellow} size='38px' link={instagramLink} />
            )}
            {facebookLink !== "none" && (
                <SotsiaalMeedia symbolNormal={facebookLogoWhite} symbolClicked={facebookLogoYellow} size='30px' link={facebookLink} />
            )}
        </div>
    );
}

function SotsiaalMeedia({symbolNormal, symbolClicked, size, link}) {
    const [symbol, setSymbol] = useState(symbolNormal);

    function handleMouseEnter() {
      setSymbol(symbolClicked)
    }
  
    // Handle hover leave event
    function handleMouseLeave() {
      setSymbol(symbolNormal);
    }
  
    function handleClick() {
        window.location.href = link;
    }
  
    return (
      <button 
        className='sotsiaalMeedia'
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}  
        onMouseLeave={handleMouseLeave}
      >
        <img 
          src={symbol}
          alt="symbol"
          style={{ width: size, height: 'auto' }}
        />
      </button>
    );
}

function Background({handleClick})
{
    return (
        <button 
            className= 'liikmed-background ' 
            onClick={handleClick}
        >
        </button>
    );
}
function Arrows({leftFunction, rightFunction}) {
  return (
    <div className='liikmed-arrows'>
      <Arrow symbolNormal={arrowLeftWhite} symbolClicked={arrowLeftYellow} handleClick={leftFunction} />
      <Arrow symbolNormal={arrowRightWhite} symbolClicked={arrowRightYellow} handleClick={rightFunction}/>
    </div>
  );
}

function Arrow({symbolNormal, symbolClicked, handleClick}) {
  const [symbol, setSymbol] = useState(symbolNormal);
  const isTouch = useIsTouchDevice();

  // Handle mouse enter (hover)
  function handleMouseEnter() {
    setSymbol(symbolClicked);
  }

  // Handle mouse leave (hover out)
  function handleMouseLeave() {
    setSymbol(symbolNormal);
  }

  // Add a handleClick function to prevent error


  return (
    <button 
      className='liikmed-arrow'
      onClick={handleClick} // Use the newly defined handleClick function
      onMouseEnter={!isTouch ? handleMouseEnter : undefined} // Apply only if not touch
      onMouseLeave={!isTouch ? handleMouseLeave : undefined}
      onTouchStart={isTouch ? handleMouseEnter : undefined} // Apply only if touch
      onTouchEnd={isTouch ? handleMouseLeave : undefined}
      onTouchCancel={isTouch ? handleMouseLeave : undefined}
    >
      <div>
        <img
          src={symbol}
          alt="arrow"
        />
      </div>
    </button>
  );
}

function QuitIcon({normalIcon, activatedIcon, handleClick}) {
  const [icon, setIcon] = useState(normalIcon);
  const isTouch = useIsTouchDevice();

  const handleMouseEnter = () => {
    setIcon(activatedIcon);
  }

  const handleMouseLeave = () => {
    setIcon(normalIcon);
  }

  return (
      <div
          className='liikmed-quitIcon'
          onClick={handleClick}
          onMouseEnter={!isTouch ? handleMouseEnter : undefined} // Apply only if not touch
          onMouseLeave={!isTouch ? handleMouseLeave : undefined}
          onTouchStart={isTouch ? handleMouseEnter : undefined} // Apply only if touch
          onTouchEnd={isTouch ? handleMouseLeave : undefined}
          onTouchCancel={isTouch ? handleMouseLeave : undefined} 
      >
        <img src={icon} />
      </div>
          
  );
}

function Top({nimi, pilt})
{
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isPhoneScreen, setIsPhoneScreen] = useState(false);
    const imageName = pilt.split('/').pop().split('.')[0];

  // Update the screen width state when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1300);
      setIsPhoneScreen(window.innerWidth < 530);
    };

    // Initialize the state on component mount
    handleResize();

    // Add event listener on resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='liikmed-top'>
    {isSmallScreen ? (
        <div>
            <img src={pilt} alt={imageName} width='400px' />

            {isPhoneScreen && <div className='header-top-phoneLine'/>}

            <div className='header'>
              <div className='header-line' />
              {nimi}
              <div className='header-line' />
            </div>

        </div>
    ) : (
        <div className='liikmed-top'>
            <div className='header'>
              <div className='header-line' />
              {nimi}
              <div className='header-line' />
            </div>
            
            <img src={pilt} alt={imageName} width='410px' />
        </div>
    )}
    </div>
  );
}

function Line()
{
    return <div className='kirjeldus-line' />
}


export default function LiikmeKirjeldus({ turnOffKirjeldus, content, moveLeft,moveRight}) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {moveRight()},
    onSwipedRight: () => {moveLeft()},
  });

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1300);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
      <div {...swipeHandlers} >
          <Background handleClick={turnOffKirjeldus} />

          <div className="kirjeldus">

              <div className='kirjeldus-logo'>
                <img src={content.logo} style={{width: content.logoWidth}}/>
              </div>
        
              <Top nimi={content.liikmeNimi} pilt={content.liputoimkonnaPilt} />

              <Line />

              <div className="kirjeldus-text">
                  Kontakt: {content.kontakt}
              </div>

              <Line />

              <div className="kirjeldus-text">Liitunud EKLL-ga: {content.liitumisKuupaev}</div>

              <Line />

              <SotsMeediaLingid 
                  instagramLink={content.instagram} 
                  facebookLink={content.facebook} 
              />



             
          </div>


          <QuitIcon normalIcon={quitIcon} activatedIcon={quitIconActivated} handleClick={turnOffKirjeldus}/>

          <Arrows leftFunction={moveLeft} rightFunction={moveRight} handleClick={turnOffKirjeldus}/>
      </div>
  );
}