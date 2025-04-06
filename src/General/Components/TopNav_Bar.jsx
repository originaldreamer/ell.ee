import { useState, useEffect } from 'react'
import './TopNav_Bar.css'


//imported images
import detailneLogo from '../../assets/General/Vapp detailsem.png';
import lihtneLogo from '../../assets/General/Vapp lihtne.png'


//imported elements
import arrowDown from '../Design Elements/Dropdown Arrow down.svg'
import arrowDownActivated from '../Design Elements/Dropdown Arrow down activated.svg'
import menuIcon from '../Design Elements/menuIcon.svg'
import menuIconActivated from '../Design Elements/menuIcon activated.svg'

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
                {link.unComplete ? "-" : ""}
                {link.label}
              </a>
            </div>
          ))}
        </div>
      </div>
  );
}

function TopNaviagtionButtonNormal({ text, link }) {
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



  return ( 
    <div 
      className={`normalbtn ${isHovering ? 'hover' : ''} ${needToReturn ? 'return' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a href={link} style={{ color: "inherit", textDecoration: "none" }}>
        {text}
      </a>
    </div>
  );
}




function TopNavigationBarButtons() {
  return (
    <div className='topBar-buttons'>

      <TopNaviagtionButtonDropDown
        text = "Liit"
        links={[
          { href: "./tutvustus", label: "Tutvustus", unComplete: "true"},
          { href: "./juhatus", label: "Juhatus", unComplete: "true"},
          { href: "./liikmed", label: "Liikmed" },
          { href: "./pohikiri", label: "Põhikiri" }
        ]}
      />

    <TopNaviagtionButtonDropDown
        text = "Teated"
        links={[
          { href: "./uudised", label: "Uudised!", unComplete: "true" },
          { href: "./syndmused", label: "Sündmused" }
        ]}
      />


    <TopNaviagtionButtonNormal
        text = "Dokumendid"
        link = "./dokumendid"
      />

    <TopNaviagtionButtonNormal
      text = "Kontakt"
      link = "./kontakt"
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

  // Update the screen width state when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1200);
      setShowSidePanel(isSmallScreen);
    };

    // Initialize the state on component mount
    handleResize();

    // Add event listener on resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='topNavBar'>

      <Logo />
      
      {showSidePanel && <TopNavSidePanel hidePanelFunction={() => setShowSidePanel(false)} />}

      {!isSmallScreen ?  <TopNavigationBarButtons />
       : <MenuIcon showPanelFunction={setShowSidePanel} isShowingSidePanel={showSidePanel}/>}

    </div>
  );
}
