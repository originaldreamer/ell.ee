import { useState, useEffect } from 'react'
import './TopNavSidePanel.css'
import useIsTouchDevice from '/src/hooks/useIsTouchDevice.jsx';


//imported elements
import arrowDown from '../Design Elements/Dropdown Arrow down.svg'
import arrowDownActivated from '../Design Elements/Dropdown Arrow down activated.svg'

function DropDownContentKiri({link, hidePanelFunction}) {
  const isTouch = useIsTouchDevice();
  const [hoverActive, setHoverActive] = useState(false);

  const unActivateHover = () => {
    setTimeout(() => {
      setHoverActive(false);
    }, 200);
  }

  return (
    <div>
      <div className='topNavSidePanel-dropDown-content-line' />
      <a
        className={`topNavSidePanel-dropDown-content-element ${hoverActive ? 'hover' : ''}`} 
        href={link.href}
        onMouseEnter={!isTouch ? () => setHoverActive(true) : undefined} 
        onMouseLeave={!isTouch ? () => setHoverActive(false) : undefined} 
        onTouchStart={isTouch ? () => setHoverActive(true) : undefined}
        onTouchEnd={isTouch ? unActivateHover: undefined}
        onTouchCancel={isTouch ? unActivateHover : undefined} 
        onClick={hidePanelFunction}
      >
        {link.label}
      </a>
      <div className='topNavSidePanel-dropDown-content-line' />
    </div>

      

  );
}

function DropDownContent({ links, hidePanelFunction }) {
  

    return (
      <div className="topNavSidePanel-dropDown-content">
        {links.map((link, index) => (
          <div key={index}>
            <DropDownContentKiri link={link} hidePanelFunction={hidePanelFunction}/>
          </div>
        ))}
        
      </div>
    );
  }
  
function DropDown({tekst, links, id, selectedId, setIdFunction, hidePanelFunction})
{
    const [curIcon, setCurIcon] = useState(arrowDown);
    const [textColor, setTextColor] = useState('#F5F5F5');
    const isTouch = useIsTouchDevice();



    const handleClick = () => {
        if (id === selectedId)
        {
            setIdFunction(-1);
        }
        else
        {
            setIdFunction(id);
        }
    }

    const handleMouseEnter = () => {
          setCurIcon(arrowDownActivated);
          setTextColor('#EFA900')
        }
    
      const handleMouseLeave = () => {
            setCurIcon(arrowDown);
            setTextColor('#F5F5F5')
    
          
      }
    
    return (
        <div className='topNavSidePanel-dropDown' >
            
            
            <div className='topNavSidePanel-dropDown-title' 
                style={{color: textColor}}
                
                onMouseEnter={!isTouch ? handleMouseEnter : undefined} 
                onMouseLeave={!isTouch ? handleMouseLeave : undefined} 
                onTouchStart={isTouch ? handleMouseEnter : undefined}
                onTouchEnd={isTouch ? handleMouseLeave: undefined}
                onTouchCancel={isTouch ? handleMouseLeave : undefined} 
                onClick={handleClick}
            >
                {tekst}
                <img src={curIcon}/> 
            </div>
            
            {id==selectedId && <DropDownContent links={links} hidePanelFunction={hidePanelFunction}/>}
        </div>
    );
}

 
function NormalBtn({tekst, link, scrollTo, setIdFunction, hidePanelFunction})
{
    const [textColor, setTextColor] = useState('#F5F5F5');
    const isTouch = useIsTouchDevice();

    const handleClick = () => {
        setIdFunction(-1);
        hidePanelFunction();
        if (link) {
          window.location.href = link;
        } else if (scrollTo) {
          document.documentElement.style.overflowY = 'auto';
          window.scrollTo({ top: scrollTo, behavior: "smooth" });
        }
          
    }

    const handleMouseEnter = () => {
          setTextColor('#EFA900')
        }
    
      const handleMouseLeave = () => {
          setTextColor('#F5F5F5')
      }
    
    return (

            
            
            <a className='topNavSidePanel-normalBtn' 
                onClick={handleClick}
                onMouseEnter={!isTouch ? handleMouseEnter : undefined} 
                onMouseLeave={!isTouch ? handleMouseLeave : undefined} 
                onTouchStart={isTouch ? handleMouseEnter : undefined}
                onTouchEnd={isTouch ? handleMouseLeave: undefined}
                onTouchCancel={isTouch ? handleMouseLeave : undefined} 
                style = {{color: textColor}}
            >
                {tekst}
            </a>

    );
}



export default function TopNavSidePanel({hidePanelFunction}) {
  const [selectedId, setSelectedId] = useState(-1);

  return (
    <div className='topNavSidePanel-container'>
        <div className='topNavSidePanel-topLine' />
        <div className='topNavSidePanel-sisu'>
         
            
            <DropDown tekst="Liit" id = '0'  selectedId={selectedId} setIdFunction={setSelectedId} hidePanelFunction={hidePanelFunction}
                links={[
                    { href: "./juhatus", label: "Juhatus"},
                    { href: "./liikmed", label: "Liikmed" },
                    { href: "./ajalugu", label: "Ajalugu" },
                    { href: "./symboolika", label: "Sümboolika" }
            ]}/>

            <DropDown tekst="Meedia"  id = '1'  selectedId={selectedId} setIdFunction={setSelectedId} hidePanelFunction={hidePanelFunction}
                links={[
                    { href: "./uudised", label: "Uudised"},
                    { href: "./kalender", label: "Kalender" },
                    { href: "./galerii", label: "Galerii" }
            ]}/>

            <NormalBtn tekst="Dokumendid" link='./dokumendid' setIdFunction={setSelectedId} hidePanelFunction={hidePanelFunction} />
            <NormalBtn tekst="Kontakt" scrollTo = {10*document.documentElement.scrollHeight} setIdFunction={setSelectedId} hidePanelFunction={hidePanelFunction} />
            
            
        </div>
    </div>
    
  );
}
