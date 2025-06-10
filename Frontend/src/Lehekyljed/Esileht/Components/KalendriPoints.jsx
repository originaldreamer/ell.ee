import { useRef, useEffect, useState } from 'react';
import './KalendriPoints.css';

import KalendriPointTile from './KalendriPointTile';
/*import data from '../../SyndmusteList/Content/Syndmused.json';*/
import PageHeaderLines from '../../../General/Components/PageHeaderLines'
import normalMoreIcon from '../Design elements/arrow right black.svg'
import activatedMoreIcon from '../Design elements/arrow right yellow.svg'
import useIsTouchDevice from '/src/hooks/UseIsTouchDevice.jsx';

function Interactable({normalIcon, activatedIcon, handleClick}) {
    const isTouch = useIsTouchDevice();
    const [icon, setIcon] = useState(normalIcon);
    const [hoverActive, setHoverActive] = useState(false);

    const unActivateHover = () => {
      setTimeout(() => {
        setHoverActive(false);
        setIcon(normalIcon);
      }, 300);

    }

    return (
        <img
            className={`kalendriPoints-interactable ${hoverActive ? 'hover' : ''}`}
            onMouseEnter={!isTouch ? () => {setIcon(activatedIcon); setHoverActive(true);} : undefined}  
            onMouseLeave={!isTouch ? () => {setIcon(normalIcon); setHoverActive(false);} : undefined}  
            onTouchStart={isTouch ? () => {setIcon(activatedIcon); setHoverActive(true);} : undefined}
            onTouchEnd={isTouch ? unActivateHover : undefined}
            onTouchCancel={isTouch ? unActivateHover : undefined} 
            onClick={handleClick}
            src={icon}         
        /> 
    ); 
}

export default function KalendriPoints() {
  const sliderRef = useRef(null);
  const [pointCount, setPointCount] = useState(window.innerWidth >= 450 ? 8 : 3);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/syndmused')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err));
    

    const slider = sliderRef.current;
    let isDown = false;
    let startX = 0, baseScroll = 0;
    let lastX = 0, lastTime = 0, velocity = 0;
    let animID = null;
    let canDrag = false;

    const timer = setTimeout(() => {
      canDrag = (window.innerWidth >= 450); 
    }, 10);


    const handleResize = () => {
      slider.scrollLeft = 0;
      setPointCount(window.innerWidth >= 450 ? 8 : 3);

      if (window.innerWidth < 450) {
        isDown = false;
        slider.classList.remove('dragging');
        cancelAnimationFrame(animID);
        canDrag = false;
      }
      else {
        canDrag = true;
      }

    }

    const maxScroll = () => slider.scrollWidth - slider.clientWidth;

    // Start drag
    const onDown = e => {
      if (!canDrag) return;
      e.preventDefault();

      isDown = true;
      slider.classList.add('dragging');
      const pageX = e.pageX ?? e.touches[0].pageX;
      startX = pageX - slider.offsetLeft;
      baseScroll = slider.scrollLeft;
      lastX = startX;
      lastTime = performance.now();
      cancelAnimationFrame(animID);
    };

    // During drag
    const onMove = e => {
      if (!isDown || !canDrag) return;
      e.preventDefault();  // needed for touch on some browsers :contentReference[oaicite:2]{index=2}
      const pageX = e.pageX ?? e.touches[0].pageX;
      const x = pageX - slider.offsetLeft;
      const dx = x - startX;
      let newScroll = baseScroll - dx;

      // Rubber-band effect when over-dragged :contentReference[oaicite:3]{index=3}
      if (newScroll < 0) {
        newScroll = -Math.pow(-newScroll, 0.7);
      } else if (newScroll > maxScroll()) {
        const extra = newScroll - maxScroll();
        newScroll = maxScroll() + Math.pow(extra, 0.7);
      }

      slider.scrollLeft = newScroll;

      // Compute velocity for momentum
      const now = performance.now();
      const dt = now - lastTime;
      if (dt > 0) {
        velocity = ((x - lastX) / dt) * 14;
        lastX = x;
        lastTime = now;
      }
    };

    // End drag
    const onUp = () => {
      if (!isDown || !canDrag) return;
      isDown = false;
      slider.classList.remove('dragging');

      // If over-scrolled, animate back to edge with ease-out cubic
      if (slider.scrollLeft < 0 || slider.scrollLeft > maxScroll()) {
        const target = slider.scrollLeft < 0 ? 0 : maxScroll();
        const start = slider.scrollLeft;
        const duration = 300;
        const t0 = performance.now();

        const bounce = t => {
          const prog = Math.min((t - t0) / duration, 1);
          const ease = 1 - Math.pow(1 - prog, 3);  /* cubic ease-out */
          slider.scrollLeft = start + (target - start) * ease;
          if (prog < 1) animID = requestAnimationFrame(bounce);
        };
        animID = requestAnimationFrame(bounce);
        return;
      }

      // Otherwise, start momentum glide
      const momentum = () => {
        if (!canDrag) return;
        slider.scrollLeft -= velocity;
        velocity *= 0.96;               /* friction */
        if (Math.abs(velocity) > 0.5) {
          animID = requestAnimationFrame(momentum);
        }
      };
      animID = requestAnimationFrame(momentum);
    };

    

    // Bind mouse & touch events, making touchmove non-passive so preventDefault works :contentReference[oaicite:4]{index=4}
    slider.addEventListener('mousedown', onDown);
    slider.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
    slider.addEventListener('touchstart', onDown);
    slider.addEventListener('touchmove', onMove, { passive: false });
    document.addEventListener('touchend', onUp);
    window.addEventListener('resize', handleResize);

    return () => {
      slider.removeEventListener('mousedown', onDown);
      slider.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
      slider.removeEventListener('touchstart', onDown);
      slider.removeEventListener('touchmove', onMove);
      document.removeEventListener('touchend', onUp);
      window.removeEventListener('resize', handleResize);
       clearTimeout(timer);
      cancelAnimationFrame(animID);
    };
  }, []);

  return (
    <div className="kalendriPoints-container">
        <div className='kalendriPoints-pealkiri'>
            <PageHeaderLines title="Sündmused" isSmall='true'/> 
        </div>


        <div ref={sliderRef} className="kalendriPoints-sisu">
            {data.slice(0, pointCount).map((syndmus, idx) => (
                <KalendriPointTile
                key={idx}
                className="kalendriPointTile"
                pealkiri={syndmus.pealkiri}
                kuupaev={syndmus.kuupaev}
                asukoht={syndmus.asukoht}
                />
            ))}

             <Interactable
                normalIcon={normalMoreIcon}
                activatedIcon={activatedMoreIcon}
                handleClick={() => window.location.href = './kalender'}
            />
            
            </div>
    </div>
    
  );
}
