// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import Heroes from './pages/Heroes';
import VictoryWeapons from './pages/VictoryWeapons';
import Memorials from './pages/Memorials';
import WarCrime from './pages/WarCrime';
import Rear from './pages/Rear';
import VictoryDocs from './pages/VictoryDocs';
import AfterVictory from './pages/AfterVictoryPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/timeline" element={<Timeline />} />
      <Route path="/heroes" element={<Heroes />} />
      <Route path="/victory-weapons" element={<VictoryWeapons />} />
      <Route path="/memorials" element={<Memorials />} />
      <Route path="/war-crimes" element={<WarCrime />} />
      <Route path="/rear" element={<Rear />} />
      <Route path="/documents" element={<VictoryDocs />} />
      <Route path="/after-victory" element={<AfterVictory />} />
      <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
