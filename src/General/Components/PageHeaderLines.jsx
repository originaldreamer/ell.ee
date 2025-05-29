import { useState } from 'react'
import './PageHeaderLines.css'






export default function PageHeaderLines({title, includeBg=false, isSmall=false})
{ 
    const bottomMargin = includeBg ? '150px' : '30px';

    return (
        <div 
            className={`page-headerLines-container${isSmall ? ' page-headerLines-container-small' : ''}`} 
            style={{ marginBottom: bottomMargin }}
        >
            {includeBg && <div className='page-headerLines-bg' />}

            <div className='page-headerLines'> 


                <div className='page-headerLines-line' />

                <div className='page-headerLines-text'> 
                    {title}  
                </div>

                <div className='page-headerLines-line' />
            </div>
        </div>
        
        
    );
} 