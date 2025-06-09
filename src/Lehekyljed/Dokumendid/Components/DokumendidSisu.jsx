import '../../../index.css';
import './DokumendidSisu.css'

import dokumentIcon from '../Design elements/file icon.svg';
import dokumentIconClicked from '../Design elements/file icon Clicked.svg';
import LinkUnderlined from '../../../General/Components/LinkUnderlined.jsx';


//imported documents
import asutamisleping from '../Failid/EKLL-asutamisleping-20.02.25.pdf';
import pohikiri from '../Failid/EKLL-põhikiri_16-02-2025.pdf';



function Dokument({text, file}) {
  const handleclick = () => {
    if (file) {
      window.open(file, '_blank');
    }
  }

  return (
    <LinkUnderlined 
      file={file} 
      display={<>
        <img src={dokumentIcon} style={{ width: '22px', marginRight: '6px' }} />
        {text}
      </>}
      displayHovered={<>
        <img src={dokumentIconClicked} style={{ width: '22px', marginRight: '6px' }} />
        {text}
      </>}
    />


    
  )
}

export default function DokumendidSisu() {

  return (
    <div className='DokumendidSisu-container'>


      <div className='mid-header DokumendidSisu-pealkiri'>Peamine</div>

      <div className='loetelu'>
        <Dokument text="EKLL-põhikiri_16-02-2025" file={pohikiri} />
        <Dokument text="EKLL-asutamisleping-20.02.25" file={asutamisleping} />
      </div>




    </ div>
  );
}