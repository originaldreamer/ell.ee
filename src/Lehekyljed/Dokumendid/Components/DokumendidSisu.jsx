import '../../../index.css';

import dokumentIcon from '../Design elements/file icon.svg';
import dokumentIconClicked from '../Design elements/file icon Clicked.svg';
import LinkUnderlined from '../../../General/Components/LinkUnderlined.jsx';


//imported documents
import test1 from '../Content/Test 1.pdf';
import test2 from '../Content/Test 2.pdf';


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
    <div className='textContent-container'>


    <div className='mid-header'>Tähtsad asjad</div>

    <div className='loetelu'>
      <Dokument text="Strateegiline Ülevaade 2025" file={test1} />
      <Dokument text="Juhtkonna Otsus 15.03.2025" file={test2} />
      <Dokument text="Aastaaruanne ja Eesmärgid" file={test1} />
    </div>

    <div className='mid-header'>Seadused</div>
    <div className='loetelu'>
      <Dokument text="Töölepingu Seadus" file={test1} />
      <Dokument text="Andmekaitse Õigusakt" file={test2} />
      <Dokument text="Keskkonnakaitse Seadus" file={test1} />
      <Dokument text="Avaliku Teabe Seadus" file={test1} />
      <Dokument text="Võrdse Kohtlemise Seadus" file={test1} />
    </div>

    <div className='mid-header'>Eeskirjad</div>
    <div className='loetelu'>
      <Dokument text="Ettevõtte Sise-eeskirjad" file={test1} />
      <Dokument text="Ohutus- ja Turvareeglid" file={test2} />
      <Dokument text="Kvaliteedistandardite Juhend" file={test1} />
      <Dokument text="Sisekorra Protseduurid" file={test1} />
      <Dokument text="Haldusprotseduuride Eeskirjad" file={test1} />
    </div>

    <div className='mid-header'>Liitumiskord</div>
    <div className='loetelu'>
      <Dokument text="Liitumise Tingimused" file={test1} />
      <Dokument text="Registreerimisprotseduurid" file={test1} />
    </div>



    </ div>
  );
}