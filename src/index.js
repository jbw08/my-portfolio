import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Services from './pages/Services';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/pages/About" element={<About />} />
          <Route path="/pages/Contact" element={<Contact />} />
          <Route path="/pages/Projects" element={<Projects />} />
          <Route path="/pages/Services" element={<Services />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <div className="min-h-screen w-full flex flex-col">
      
    // </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

