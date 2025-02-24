import { useState } from 'react'
import './PageHeaderLines.css'






export default function PageHeaderLines({title})
{ 
    return (
        <div className='page-headerLines'>
            <div className='page-headerLines-line' />

            <div className='page-headerLines-text'> 
                {title} 
            </div>

            <div className='page-headerLines-line' />
        </div>
        
    );
}