import { useState, useEffect } from 'react'
import './SyndmusteList.css'


//imported components
import TopNavigationBar from '../../General/Components/TopNav_Bar.jsx';
import BottomNavigationBar from '../../General/Components/BottomNav_Bar.jsx';
import PageHeaderLines from '../../General/Components/PageHeaderLines.jsx';
import PageHeaderImage from '../../General/Components/PageHeaderImage.jsx';
import Syndmus from './Components/Syndmus.jsx';

//imported content
import puitTaust from './Design elements/puit.jpg'

export default function SyndmusteList() {
  return (
      <div className='SyndmusteList-container'>
          <div className='SyndmusteList-bg' />

          <div className='SyndmusteList-body'>
              <TopNavigationBar />

              <PageHeaderImage title="Sündmused" image={puitTaust} offsetY='100%' titleAlignment="left"/>

              <Syndmus 
                pealkiri = "Unustatud sokkide akadeemia"
                kuupaev = "01.01.2025"
                asukoht="Kohvik Pööning, Tallinn"
                kellaaeg="10:00 - 11:30"
                kirjeldus="Uuring unustatud sokkide üle, mis on maailmas kaduma läinud. Kas nad on eriline liik või lihtsalt meie unustuse ohvrid?"
              />

              <Syndmus 
                pealkiri = "Kohvikus kohvimasinad"
                kuupaev = "05.02.2025"
                asukoht="Kohvik Roheline Kohv, Tartu"
                kellaaeg="14:00 - 16:00"
                kirjeldus="Diskussioon kohvimasinate kohal. Kas nad on vaid tööriistad või midagi enamat?"
              />

              <Syndmus 
                pealkiri = "Lauamängu maraton"
                kuupaev = "07.03.2025"
                asukoht="Lauamängude paradiis, Pärnu"
                kellaaeg="12:00 - 18:00"
                kirjeldus="Päev täis lauamänge, kus igal osalejal tuleb võita vähemalt ühe mängu ajal kõik lauad ümber lükata!"
              />

              <Syndmus 
                pealkiri = "Õhupallide võitlus"
                kuupaev = "10.04.2025"
                asukoht="Spordihall, Viljandi"
                kellaaeg="16:00 - 19:00"
                kirjeldus="Kuidas domineerida õhupallide maailmas? Tule ja osale suures õhupallide lahingus, kus iga löök toob sulle punkti!"
              />

              <Syndmus 
                pealkiri = "Tantsupõrandal kõndijate kokkusaamine"
                kuupaev = "12.05.2025"
                asukoht="Klubi Stiil, Tallinn"
                kellaaeg="22:00 - 01:00"
                kirjeldus="Erilised tantsijad, kes mitte kunagi ei tantsi. Me lihtsalt kõnnime ja vaatame, kas keegi saab aru!"
              />

              <Syndmus 
                pealkiri = "Kasside allveelaev"
                kuupaev = "05.06.2025"
                asukoht="Tähtsa Ühingu ruum, Tartu"
                kellaaeg="19:00 - 21:00"
                kirjeldus="Tutvustame kasside salajast allveelaeva, mis on täis salajasi ja naljakaid kassioperatsioone!"
              />

              <Syndmus 
                pealkiri = "Rändav kartulivõistlus"
                kuupaev = "18.07.2025"
                asukoht="Metsas, Võru"
                kellaaeg="09:00 - 11:00"
                kirjeldus="Kes suudab kõige kiiremini üle metsa kartulit rännata? Tulemused on kindlasti üllatavad!"
              />

              <Syndmus 
                pealkiri = "Tuleb kokku üks raamatuklubi"
                kuupaev = "22.08.2025"
                asukoht="Raamatukogu, Rakvere"
                kellaaeg="13:00 - 14:30"
                kirjeldus="Raamatud ei ole kunagi rääkinud nii sõnakalt! Meie uus raamat ja suhtlemine on üheks ühiseks kunstivormiks!"
              />
              <Syndmus 
                pealkiri = "Piimakohvik"
                kuupaev = "21.09.2025"
                asukoht="Kohvik Piim, Põlva"
                kellaaeg="08:00 - 09:30"
                kirjeldus="Eri piimade degusteerimine kohvikus. Kas see on maitsev või lihtsalt piim?"
              />
              <Syndmus 
                pealkiri = "Piimakohvik"
                kuupaev = "21.10.2025"
                asukoht="Kohvik Piim, Põlva"
                kellaaeg="08:00 - 09:30"
                kirjeldus="Eri piimade degusteerimine kohvikus. Kas see on maitsev või lihtsalt piim?"
              />

              <Syndmus 
                pealkiri = "Piimakohvik"
                kuupaev = "21.11.2025"
                asukoht="Kohvik Piim, Põlva"
                kellaaeg="08:00 - 09:30"
                kirjeldus="Eri piimade degusteerimine kohvikus. Kas see on maitsev või lihtsalt piim?"
              />

<Syndmus 
                pealkiri = "Piimakohvik"
                kuupaev = "21.12.2025"
                asukoht="Kohvik Piim, Põlva"
                kellaaeg="08:00 - 09:30"
                kirjeldus="Eri piimade degusteerimine kohvikus. Kas see on maitsev või lihtsalt piim?"
              />

              <BottomNavigationBar />
          </div>
      </div>
  );
}
