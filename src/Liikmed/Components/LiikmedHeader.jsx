import { useState } from 'react'
import './LiikmedHeader.css'






export default function LiikmedHeader({title})
{ 
    return (
        <div className='liikmed-page-header'>

            <div className='liikmed-page-header-text'> 
                {title} 
            </div>
            <div className='liikmed-page-header-bg'/>
        </div>
        
    );
}