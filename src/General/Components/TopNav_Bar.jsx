import { useState, useEffect, useRef } from 'react'
import './TopNav_Bar.css'


//imported images
import detailneLogo from '../../assets/General/Vapp detailsem.png';
import lihtneLogo from '../../assets/General/Vapp lihtne.png'


//imported elements
import arrowDown from '../Design Elements/Dropdown Arrow down.svg'
import arrowDownActivated from '../Design Elements/Dropdown Arrow down activated.svg'
import menuIcon from '../Design Elements/menuIcon.svg'
import menuIconActivated from '../Design Elements/menuIcon activated.svg'
import arrowTop from '../Design Elements/arrow top.svg'

//imported components
import TopNavSidePanel from './TopNavSidePanel.jsx';

function Pilt( {pilt,kirjeldus, size}) {
  return <img src={pilt} alt={kirjeldus} style={{ width: size, height: 'auto' }} />;
}

function TopNaviagtionButtonDropDown({text, links}) {
  const [isHovering, setIsHovering] = useState(false);
  const [needToReturn, setNeedToReturn] = useState(false);
  const [curIcon, setCurIcon] = useState(arrowDown);


  const handleMouseEnter = () => {
      setIsHovering(true);
      setNeedToReturn(false);
      setCurIcon(arrowDownActivated);
  }

  const handleMouseLeave = () => {
      setIsHovering(false);
      setNeedToReturn(true); 
      setCurIcon(arrowDown);
  }

  return ( 
    
    <div 
      className="dropdown"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className={`dropbtn ${isHovering ? 'hover' : ''} ${needToReturn ? 'return' : ''}`}>
        {text}
        <img src={curIcon} />
      </button>
        <div className="dropdown-content">
          {links.map((link, index) => (
            <div key={index}>
              <a href={link.href}>
                {link.label}
              </a>
            </div>
          ))}
        </div> 
      </div>
  );
}

function TopNaviagtionButtonNormal({ text, link, scrollTo}) {
  const [isHovering, setIsHovering] = useState(false);
  const [needToReturn, setNeedToReturn] = useState(false);


  const handleMouseEnter = () => {
      setIsHovering(true);
      setNeedToReturn(false);
  }

  const handleMouseLeave = () => {
      setIsHovering(false);
      setNeedToReturn(true); 
  }

  const handleClick = () => {
    if (link) {
        window.location.href = link;  // Navigate to the 'to' URL when clicked
    } else if (scrollTo) {
        document.documentElement.style.overflowY = 'auto';
        window.scrollTo({ top: scrollTo, behavior: "smooth" });
    }
    
  }



  return ( 
    <div 
      className={`normalbtn ${isHovering ? 'hover' : ''} ${needToReturn ? 'return' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div style={{ color: "inherit", textDecoration: "none" }}>
        {text}
      </div>
    </div>
  );
}




function TopNavigationBarButtons() {
  return (
    <div className='topBar-buttons'>

      <TopNaviagtionButtonDropDown
        text = "Liit"
        links={[
          { href: "./juhatus", label: "Juhatus"},
          { href: "./liikmed", label: "Liikmed" },
          { href: "./ajalugu", label: "Ajalugu" },
          { href: "./symboolika", label: "Sümboolika" }
        ]}
      />

    <TopNaviagtionButtonDropDown
        text = "Meedia"
        links={[
          { href: "./uudised", label: "Uudised" },
          { href: "./kalender", label: "Kalender" },
          { href: "./galerii", label: "Galerii" }
        ]}
      />


    <TopNaviagtionButtonNormal
        text = "Dokumendid"
        link = "./dokumendid"
      />

    <TopNaviagtionButtonNormal
      text = "Kontakt"
      scrollTo = {10*document.documentElement.scrollHeight}
    />
          
        
  
      </div>
      
  );
}

function Logo() {
  return (
    <a className='logo' href="./">
      <img src={detailneLogo} style={{width: '70px'}}/>

      <div className='logoTekst'>
        Eesti Koolide
        <br/>
        Liputoimkondade Liit
      </div>
    </a>
  );
}

function MenuIcon ({setIdFunction, showPanelFunction, isShowingSidePanel})
{
    const [curIcon, setCurIcon] = useState(menuIcon);

    const handleClick = () => {
      document.documentElement.style.overflowY = isShowingSidePanel ? 'auto' : 'hidden';
        showPanelFunction(!isShowingSidePanel);
    }

    const handleMouseEnter = () => {
        setCurIcon(menuIconActivated);
    }
    
      const handleMouseLeave = () => {
        setCurIcon(menuIcon);
      }
    
    return (

            
            
        <div className='topBar-menuIcon' 
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img src={curIcon} />
        </div>

    );
}

export default function TopNavigationBar() {
  const [showSidePanel, setShowSidePanel] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [hasScrolledDown, setHasScrolledDown] = useState(false);
  


  // Update the screen width state when the window is resized
  useEffect(() => {
    const handleResize = () => {
      const smallScreen = window.innerWidth < 1200;
      setIsSmallScreen(smallScreen);

      if (!smallScreen)
      {
        setShowSidePanel(false);
      }

    };
    const handleScroll = () => {
      setHasScrolledDown(window.scrollY > 500);
      if (window.scrollY > 500)
      {
        setScrollToTopButtonPosition('33px');
      }
      else
      {
        setScrollToTopButtonPosition('0px');
      }
    }
 
    // Initialize the state on component mount
    handleResize();

    // Add event listener on resize
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    }
    }, []);

  const scrollToTop = () => { window.scrollTo({ top: 0, behavior: "smooth" });}

  return (
    <div className='topNavBar'>
      {hasScrolledDown && 
        <div className='topBar-scrollTopButton' onClick={() => scrollToTop()}>
          <img src={arrowTop} />
        </div>
      }


      
      
      <Logo />
      
      {showSidePanel && <TopNavSidePanel hidePanelFunction={() => setShowSidePanel(false)} />}

      {!isSmallScreen ?  <TopNavigationBarButtons />
       : <MenuIcon showPanelFunction={setShowSidePanel} isShowingSidePanel={showSidePanel}/>}

    </div>
  );
}
