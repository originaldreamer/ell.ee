import { useState } from 'react'
import '../../index.css'
import '../../General/Design styles/PlainContentPage2.css'

//imported components
import TopNavigationBar from '../../General/Components/TopNav_Bar.jsx';
import BottomNavigationBar from '../../General/Components/BottomNav_Bar.jsx';
import PageHeaderPlain from '../../General/Components/PageHeaderPlain.jsx';
import PageHeaderLines from '../../General/Components/PageHeaderLines.jsx';
import LinkUnderlined from '../../General/Components/LinkUnderlined.jsx';

export default function Kontakt() {

  return (
      <div className='plain2-container'>
          <div className='plain2-bg' />



          <div className='plain2-body'>
              <TopNavigationBar />


              <PageHeaderLines title="Kontakt" includeBg="true"/>

              <div className='plain2-sisu-left'>
                <div className='mid-small-top-header'>Üldine:</div>
                <LinkUnderlined display="liputoimkondade.liit@gmail.com" />
                <br />
                <div className='small-text'>Küsimuste korral võib julgelt ühendust võtta.</div>

              </div>


              <BottomNavigationBar />
          </div>
      </div>
  );
}