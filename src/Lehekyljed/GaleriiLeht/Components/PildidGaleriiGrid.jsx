import { useState, useEffect } from 'react';
import './PildidGaleriiGrid.css'

//imported components
import PildidGaleriiTile from './PildidGaleriiTile';
import PiltideView from '../../../General/Components/PiltideView.jsx';



export default function PildidGaleriiGrid({pildid}) {
    const [pildiIndex, setPildiIndex] = useState(0);
    const [curPilt, setCurPilt] = useState(pildid[0]);
    const [showGaleriiView, setShowGaleriiView] = useState(false);
    
    const setPilt = (index) => {
        setCurPilt(pildid[index]);
        setPildiIndex(index); 
    };

    const increaseKirjelduseContentIndex = () => {
        setPildiIndex(prevIndex => {
        const newIndex = prevIndex === pildid.length - 1 ? 0 : prevIndex + 1;
        setPilt(newIndex);
        return newIndex;
        });
    };

    const decreaseKirjelduseContentIndex = () => {
        setPildiIndex(prevIndex => {
        const newIndex = prevIndex === 0 ? pildid.length - 1 : prevIndex - 1;
        setPilt(newIndex);
        return newIndex;
        });
    };
    
    const changeShowKirjeldusState = (state) => {
        setShowGaleriiView(state);
        
        if (state) {
            document.documentElement.style.overflow = 'hidden';
          } else {
            document.documentElement.style.overflowY = 'auto';
          }
    }

    useEffect(() => {
        const handleKeyDown = (event) => {
          if (event.key === 'ArrowRight') {
            increaseKirjelduseContentIndex();
          }
          if (event.key === 'ArrowLeft') {
            decreaseKirjelduseContentIndex();
          }
          if (event.key === 'Escape') {
            changeShowKirjeldusState(false);
          }
        };
      
        window.addEventListener('keydown', handleKeyDown);
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }, []);

    return (
        <div className='pildidGaleriiGrid-container'>
            {pildid &&
                <div>

                    
                    <div className='pildidGaleriiGrid-grid'>
                        {pildid.map((pilt, index) => (
                            <PildidGaleriiTile 
                                key={index} 
                                pilt={pilt} 
                                handleClick={() => {
                                    changeShowKirjeldusState(true);
                                    setPilt(index);
                                }}/>
                        ))}
                    </div>
                </div>
            }

            {showGaleriiView && <PiltideView 
                curIndex={pildiIndex}
                piltideCount={pildid.length}
                pilt={curPilt}
                leftFunction={() => decreaseKirjelduseContentIndex()}
                rightFunction={() => increaseKirjelduseContentIndex()}
                quitFunction={() => changeShowKirjeldusState(false)}
            />}

            
        </div>
        

        
    );
}