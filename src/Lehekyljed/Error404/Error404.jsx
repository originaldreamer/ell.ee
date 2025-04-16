import { useState } from 'react'
import '../../index.css'
import '../../General/Design styles/PlainContentPage.css';
import './Error404.css'

//imported components
import TopNavigationBar from '../../General/Components/TopNav_Bar.jsx';
import BottomNavigationBar from '../../General/Components/BottomNav_Bar.jsx';
import MidTextSeparator from '../../General/Components/MidTextSeparator.jsx';
import PageHeaderLines from '../../General/Components/PageHeaderLines.jsx';


import flag from './Content/flag.svg'


function Button({text, handleClick})
{

    return (
        <div className='Error404-button'
            onClick={handleClick}
        >
            <div className='mid-header-white Error404-button-text'>{text}</div>
        </div>
    )
}

export default function Error404()
{
    return (
        <div className='plain-container'>
          <div className='plain-bg-icons' />



          <div className='plain-body'>
            <TopNavigationBar /> 

            <PageHeaderLines title="Error"/>

            <div className='Error404-flag'>
                <img src={flag} />
            </div>


            <MidTextSeparator
                text = {<div >
                    Paistab, et sa sattusid valele rajale. Palun kontrollige veebiaadressi ja proovige uuesti. <br />
                    Kui tekivad kahtlused, usaldage lippu. <br />
                </div>}
                
                textColor='#F5F5F5'
                bgColor='#EFA900'
                marginTop='60px'
            />

            <div className='Error404-buttons'>
                <Button text="Tagasi" handleClick={() => window.history.back()}/>
                <Button text="Kodu" handleClick={() => window.location.href = './'}/>

            </div>

            

            <BottomNavigationBar />

          </div>
        </div>
    );
}