import { useState } from 'react'
import '../App.css'

//imported components
import TopNavigationBar from '../Esileht/Components/TopNav_Bar.jsx';
import BottomNavigationBar from '../Esileht/Components/BottomNav_Bar.jsx';


export default function Liikmed()
{
    return (
    <div className='body'>
      <TopNavigationBar />

      <div className='text'>Liikmed</div>



      <BottomNavigationBar/ >
      
    </div>

    );
}