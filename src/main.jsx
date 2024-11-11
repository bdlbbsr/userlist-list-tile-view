
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import WithoutBox from './WithoutBox.jsx';
import Header from './Header';
import "./index.css";

createRoot(document.getElementById('root')).render(
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/withoutbox" element={<WithoutBox />} />
    </Routes>
  </Router>
);

