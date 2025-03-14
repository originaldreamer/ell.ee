import { useState } from 'react'
import '../../App.css'


export default function Error404()
{
    return (
        <div>
            <div className='text'>Error:</div>
            <div className='text'>Paistab, et sa sattusid valele rajale. Palun kontrollige veebiaadressi ja proovige uuesti.</div>
            <div className='text'>Kui tekivad kahtlused, liikuge lipu suunas.</div>

        </div>
    );
}