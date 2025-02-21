import { useState } from 'react'
import './Liikmed.css'

//imported components
import TopNavigationBar from '../Esileht/Components/TopNav_Bar.jsx';
import BottomNavigationBar from '../Esileht/Components/BottomNav_Bar.jsx';
import LiikmeteGrid from './Components/LiikmeteGrid.jsx';
import LiikmeKirjeldus from './Components/LiikmeKirjeldus.jsx';

export default function Liikmed()
{
    return (
    <div>
      <div className='body'>
        <TopNavigationBar />

        <div className='text'>Liikmed</div>

        <LiikmeteGrid />
        <LiikmeKirjeldus />
        


        <BottomNavigationBar />
        
      </div>


      <LiikmeKirjeldus />
    </div>
    

    

    );
}