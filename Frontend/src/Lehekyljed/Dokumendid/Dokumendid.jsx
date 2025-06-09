import '../../General/Design styles/PlainContentPage.css';
import '../../index.css';

//imported components
import TopNavigationBar from '../../General/Components/TopNav_Bar.jsx';
import BottomNavigationBar from '../../General/Components/BottomNav_Bar.jsx';
import DokumendidSisu from './Components/DokumendidSisu.jsx';
import PageHeaderImage from '../../General/Components/PageHeaderImage.jsx';

//imported elements
import dokumendidHeaderImage from './Design elements/dokumendidHeaderImage.jpg'

export default function Dokumendid() {

  return ( 
      <div className='plain-container'>
          <div className='plain-bg-icons-light' />



          <div className='plain-body'>
              <TopNavigationBar />


              <PageHeaderImage 
                title="Dokumendid"
                image={dokumendidHeaderImage}
                offsetY='80%'
                titleAlignment='left'
              />

              <DokumendidSisu />
              

              <BottomNavigationBar />
          </div>
      </div>
  );
}