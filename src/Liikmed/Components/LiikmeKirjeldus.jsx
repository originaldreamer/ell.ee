import React, { useState, useEffect } from 'react';
import '../../App.css'
import './LiikmeKirjeldus.css'

//imported logos
import facebookLogoWhite from '../../assets/General/facebook logo white.svg'
import facebookLogoYellow from '../../assets/General/faceook logo yellow.svg'
import instagramLogoWhite from '../../assets/General/instagram logo white.svg'
import instagramLogoYellow from '../../assets/General/instagram logo yellow.svg'


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
        <div>
          <img
            src={symbol}
            alt="symbol"
            style={{ width: size, height: 'auto' }}
          />
        </div>
      </button>
    );
}

function Background({handleClick})
{
    return (
        <button 
            className= 'background' 
            onClick={handleClick}
        >
        </button>
    );
}

function Top({nimi, pilt})
{
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const imageName = pilt.split('/').pop().split('.')[0];

  // Update the screen width state when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1345);
    };

    // Initialize the state on component mount
    handleResize();

    // Add event listener on resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='top'>
    {isSmallScreen ? (
        <div>
            <img src={pilt} alt={imageName} width='400px' />
            <div className='header'>{nimi}</div>
        </div>
    ) : (
        <div className='top'>
            <div className='header'>{nimi}</div>
            <img src={pilt} alt={imageName} width='400px' />
        </div>
    )}
    </div>
  );
}

function Line()
{
    return <div className='line' />
}

export default function LiikmeKirjeldus({liikmeNimi, kirjelduseText, kontakt, liitumisKuupaev, instagram, facebook, turnOffKirjeldus})
{

    return (
        <div>

            <Background handleClick={turnOffKirjeldus} />

            <div className="kirjeldus">
                <Top nimi={liikmeNimi} pilt={koolimajaPilt}/>

                <Line />
                <div className="kirjeldus-text">{kirjelduseText}</div>

                <Line />

                <div className="kirjeldus-text">
                Kontakt: {kontakt}
                </div>

                <Line />

                <div className="kirjeldus-text">Liitunud EKLL-ga: {liitumisKuupaev}</div>
                

                <Line />

                <SotsMeediaLingid 
                    instagramLink={instagram}
                    facebookLink={facebook} 
                />

            </div>


        </div>
        
        
    );
}