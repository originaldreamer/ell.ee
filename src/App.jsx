import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';


// Imported pages
import Esileht from './Esileht/Esileht.jsx';
import Liikmed from './Liikmed/Liikmed.jsx';
import Error404 from './Error404/Error404.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Esileht />} />
        <Route path="/esileht" element={<Esileht />} />
        <Route path="/liikmed" element={<Liikmed />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;