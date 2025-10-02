import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VaultTecTerminal from './components/VaultTecTerminal';

function App() {
  // Use basename only in production (GitHub Pages)
  const basename = import.meta.env.PROD ? '/adit-rahman' : '';

  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<VaultTecTerminal />} />
        <Route path="/about" element={<VaultTecTerminal />} />
        <Route path="/projects" element={<VaultTecTerminal />} />
        <Route path="/resume" element={<VaultTecTerminal />} />
        <Route path="/blog" element={<VaultTecTerminal />} />
        <Route path="/contact" element={<VaultTecTerminal />} />
      </Routes>
    </Router>
  );
}

export default App;
