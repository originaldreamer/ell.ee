import '../../General/Design styles/PlainContentPage.css';
import '../../index.css';

//imported components
import TopNavigationBar from '../../General/Components/TopNav_Bar.jsx';
import BottomNavigationBar from '../../General/Components/BottomNav_Bar.jsx';
import PageHeaderPlain from '../../General/Components/PageHeaderPlain.jsx';
import DokumendidSisu from './Components/DokumendidSisu.jsx';
import ImageAndContent from '../../General/Components/ImageAndContent.jsx';
import PageHeaderImage from '../../General/Components/PageHeaderImage.jsx';

//imported elements
import dokumendidHeaderImage from './Design elements/dokumendidHeaderImage.jpg'

export default function Dokumendid() {

  return ( 
      <div className='plain-container'>
          <div className='plain-bg' />



          <div className='plain-body'>
              <TopNavigationBar />


              <PageHeaderImage 
                title="Dokumendid"
                image={dokumendidHeaderImage}
                offsetY='80%'
                titleAlignment='left'
              />

              <ImageAndContent content={<DokumendidSisu />} offsetY='-120px'/>

              
              


              <BottomNavigationBar />
          </div>
      </div>
  );
}