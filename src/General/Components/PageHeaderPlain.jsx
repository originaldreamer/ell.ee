import React, { useState } from 'react';
import './PageHeaderPlain.css';  // Make sure to import the CSS

export default function PageHeaderPlain({ title }) {
  const [isHovering, setIsHovering] = useState(false);


  function handleMouseEnter() {
    setIsHovering(true);
    

  }

  function handleMouseLeave() {
    setIsHovering(false);
  }

  return (
    <div className="pageHeaderPlain-container">
      <div
        className="pageHeaderPlainTitle"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {title}
      </div>
    </div>
  );
}
