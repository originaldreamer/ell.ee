import { useState, useEffect } from 'react'
import '../../../index.css'
import './Koostoopartnerid.css'

import PageHeaderLines from '../../../General/Components/PageHeaderLines'

/*imported logod*/
import riigikantseleiLogo from '../KoostooPartneriteLogod/riigikantselei logo.jpg'
import lipuvabrikLogo from '../KoostooPartneriteLogod/lipuvabrik logo.svg'
import lipuseltsLogo from '../KoostooPartneriteLogod/lipuselts logo.png'
import riigikoguLogo from '../KoostooPartneriteLogod/riigikogu logo.svg'

function KoostooPartner ({logo, link, size}) {
    return (
        <a href={link} className='koostoopartnerid-partner'>
            <img src={logo} href={link} style={{width: size}}/>
        </ a>
    );
}

export default function Koostoopartnerid() {
    return (
        <div className='koostoopartnerid-container'>

            
            <div className='koostoopartnerid-title'>
                <PageHeaderLines title='Koostööpartnerid' isSmall={true}/>
            </ div>

            
            <div className='koostoopartnerid-logod'>
                <KoostooPartner logo={riigikantseleiLogo} link='https://riigikantselei.ee/' size='300px'/>
                <KoostooPartner logo={lipuseltsLogo} link='https://www.lipuselts.ee/' size='180px'/>
                <KoostooPartner logo={riigikoguLogo} link='https://www.riigikogu.ee/' size='220px'/>
                <KoostooPartner logo={lipuvabrikLogo} link='https://www.lipuvabrik.ee/' size='220px'/>
            </ div>
            
        
        </ div>
    );
}