import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';


//Imported components


// Imported pages
import Esileht from './Lehekyljed/Esileht/Esileht.jsx';
import Liikmed from './Lehekyljed/Liikmed/Liikmed.jsx';
import Pohikiri from './Lehekyljed/Pohikiri/Pohikiri.jsx';
import Dokumendid from './Lehekyljed/Dokumendid/Dokumendid.jsx';
import Uudised from './Lehekyljed/Uudised/Uudised.jsx'
import UudisLeht from './Lehekyljed/UudisLeht/UudisLeht.jsx';
import Error404 from './Lehekyljed/Error404/Error404.jsx';
import LiiduKirjeldus from './Lehekyljed/LiiduKirjeldus/LiiduKirjeldus.jsx';
import Juhatus from './Lehekyljed/Juhatus/Juhatus.jsx';
import SyndmusteList from './Lehekyljed/SyndmusteList/SyndmusteList.jsx'
import Ajalugu from './Lehekyljed/Ajalugu/Ajalugu.jsx'
import Symboolika from './Lehekyljed/Symboolika/Symboolika.jsx';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Esileht />} />
        <Route path="/esileht" element={<Esileht />} />
        <Route path="/liikmed" element={<Liikmed />} />
        <Route path="/pohikiri" element={<Pohikiri />} />
        <Route path="/dokumendid" element={<Dokumendid />} />
        <Route path="/uudised" element={<Uudised />} />
        <Route path="/uudisview" element={<UudisLeht />} />
        <Route path="/tutvustus" element={<LiiduKirjeldus />} />
        <Route path="/kalender" element={<SyndmusteList />} />
        <Route path="/juhatus" element={<Juhatus />} />
        <Route path="/ajalugu" element={<Ajalugu />} />
        <Route path="/symboolika" element={<Symboolika />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;