import { useState, useEffect } from 'react'
import './PageHeaderImage.css'
import '../../index.css'






export default function PageHeaderImage({title, image, offsetY = "50%"}) {
  return (
      <div className='pageHeaderImage-container'>
        <div className='pageHeaderImage-bg'>
            <img src={image} style={{ objectPosition: `50% ${offsetY}` }}/>
        </div>
        

        <div className='pageHeaderImage-text'>
            <div className='big-header2-white'>{title}</div>
        </div>
          
      </div>
  );
}
