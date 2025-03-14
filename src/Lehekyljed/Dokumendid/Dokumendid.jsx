import '../../General/Design styles/PlainContentPage.css';
import '../../index.css';

//imported components
import TopNavigationBar from '../../General/Components/TopNav_Bar.jsx';
import BottomNavigationBar from '../../General/Components/BottomNav_Bar.jsx';
import PageHeaderPlain from '../../General/Components/PageHeaderPlain.jsx';
import DokumendidSisu from './Components/DokumendidSisu.jsx';


export default function Dokumendid() {

  return (
      <div className='plain-container'>
          <div className='plain-bg' />



          <div className='plain-body'>
              <TopNavigationBar />


              <PageHeaderPlain title="Dokumendid"/>
            
              <DokumendidSisu />
              


              <BottomNavigationBar />
          </div>
      </div>
  );
}