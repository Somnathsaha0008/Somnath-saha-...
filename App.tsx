import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FormPage from './components/FormPage';
import TablePage from './components/TablePage';
import About from './components/About';
import ContextMenu from './components/ContextMenu';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Navbar />
        <main className="flex-grow p-4 md:p-8 container mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/table" element={<TablePage />} />
            <Route path="/about" element={<About />} />
            {/* ContextMenu is placed here as a standalone route for testing,
                but in a real app, it might be part of another page or a global component. */}
            <Route path="/context-menu" element={<ContextMenu />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;