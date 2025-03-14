import { useState, useEffect } from 'react';
import './PageHeaderImage.css';
import '../../index.css';

export default function PageHeaderImage({ title, image, offsetY = "50%", titleAlignment = 'center' }) {
  // Set initial alignment based on window width
  const [alignment, setAlignment] = useState(window.innerWidth < 500 ? 'center' : titleAlignment);

  useEffect(() => {
    const handleResize = () => {
      // If the window width is less than 500px, set alignment to center; otherwise use the provided titleAlignment
      if (window.innerWidth < 650) {
        setAlignment('center');
      } else {
        setAlignment(titleAlignment);
      }
    };

    window.addEventListener('resize', handleResize);
    // Check on mount as well
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [titleAlignment]);

  return (
    <div className='pageHeaderImage-container'>
      <div className='pageHeaderImage-bg'>
        <img src={image} style={{ objectPosition: `50% ${offsetY}` }} alt="header" />
      </div>
      <div className='pageHeaderImage-text'>
        <div className='big-header2-white' style={{ textAlign: alignment }}>
          {title}
        </div>
      </div>
    </div>
  );
}
