import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';


//Imported components


// Imported pages
import Esileht from './Esileht/Esileht.jsx';
import Liikmed from './Liikmed/Liikmed.jsx';
import Pohikiri from './Pohikiri/Pohikiri.jsx';
import Dokumendid from './Dokumendid/Dokumendid.jsx';
import Uudised from './Uudised/Uudised.jsx';
import Error404 from './Error404/Error404.jsx';


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
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;