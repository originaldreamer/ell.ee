import { useState, useEffect } from 'react'
import './ImageAndContent.css'
import '../../index.css'






export default function ImageAndContent({content, image, reverse}) {
  return (
      <div className='imageAndContent-container'>
        <div className='imageAndContent-content'>
            {content}
        </ div>

        <div className='imageAndContent-image'>
            <img src={image} />
        </div>

      </div>
  );
}
