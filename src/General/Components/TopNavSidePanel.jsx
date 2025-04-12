import { useState } from 'react'
import './TopNavSidePanel.css'


//imported elements
import arrowDown from '../Design Elements/Dropdown Arrow down.svg'
import arrowDownActivated from '../Design Elements/Dropdown Arrow down activated.svg'

function DropDownContent({ links, hidePanelFunction }) {
    return (
      <div className="topNavSidePanel-dropDown-content">
        {links.map((link, index) => (
          <div key={index}>
            <div className="topNavSidePanel-dropDown-content-line" />
            <a
              className="topNavSidePanel-dropDown-content-element"
              href={link.href}
              onClick={hidePanelFunction}
            >
              {link.unComplete ? "-" : ""}
              {link.label}
            </a>
            <div className="topNavSidePanel-dropDown-content-line" />
          </div>
        ))}
        
      </div>
    );
  }
  
function DropDown({tekst, links, id, selectedId, setIdFunction, hidePanelFunction})
{
    const [curIcon, setCurIcon] = useState(arrowDown);
    const [textColor, setTextColor] = useState('white');

    const handleClick = () => {
        if (id === selectedId)
        {
            setIdFunction(-1);
        }
        else
        {
            setTextColor('#EFA900')
            setIdFunction(id);
        }
    }

    const handleMouseEnter = () => {
          setCurIcon(arrowDownActivated);
          setTextColor('#EFA900')
        }
    
      const handleMouseLeave = () => {
          setCurIcon(arrowDown);
          setTextColor('white')
      }
    
    return (
        <div className='topNavSidePanel-dropDown' >
            
            
            <div className='topNavSidePanel-dropDown-title' 
                style={{color: textColor}}
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {tekst}
                <img src={curIcon}/>
            </div>
            
            {id==selectedId && <DropDownContent links={links} hidePanelFunction={hidePanelFunction}/>}
        </div>
    );
}

 
function NormalBtn({tekst, link, setIdFunction, hidePanelFunction})
{

    const handleClick = () => {
        setIdFunction(-1);
        hidePanelFunction();
    }

    const handleMouseEnter = () => {
          setTextColor('#EFA900')
        }
    
      const handleMouseLeave = () => {
          setTextColor('white')
      }
    
    return (

            
            
            <a className='topNavSidePanel-normalBtn' 
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                href={link}
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
                    { href: "./tutvustus", label: "Tutvustus", unComplete: "true"},
                    { href: "./juhatus", label: "Juhatus", unComplete: "true"},
                    { href: "./liikmed", label: "Liikmed" },
                    { href: "./pohikiri", label: "Põhikiri" }
            ]}/>

            <DropDown tekst="Teated"  id = '1'  selectedId={selectedId} setIdFunction={setSelectedId} hidePanelFunction={hidePanelFunction}
                links={[
                    { href: "./uudised", label: "Uudised!"},
                    { href: "./syndmused", label: "Sündmused", unComplete: "true"},
            ]}/>

            <NormalBtn tekst="Dokumendid" link='./dokumendid' setIdFunction={setSelectedId} hidePanelFunction={hidePanelFunction} />
            <NormalBtn tekst="Kontakt" link='./kontakt' setIdFunction={setSelectedId} hidePanelFunction={hidePanelFunction} />
            
            
        </div>
    </div>
    
  );
}
