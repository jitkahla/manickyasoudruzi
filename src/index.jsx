import React from 'react';
import { createRoot } from 'react-dom/client';
import Domu from './Domu';
import Kontakt from './Kontakt';
import Oprojektu from './Oprojektu';
import Onas from './Onas';
import './style.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import { useState } from 'react';

const App = () => {
  const [navopen, setNavopen] = useState(false);
  const closeNav = () => setNavopen(false);

  return (
    <>
      <header>
        <button
          onClick={() => setNavopen(!navopen)}
          className="nav-btn"
        ></button>
        <div className={navopen ? 'nav-mobile' : 'nav--closed nav-mobile'}>
          <a onClick={closeNav} href="/Domu">
            Domů
          </a>
          <a onClick={closeNav} href="/Oprojektu">
            O projektu
          </a>
          <a onClick={closeNav} href="/Onas">
            O nás
          </a>
          <a onClick={closeNav} href="/Kontakt">
            Kontakty
          </a>
        </div>
        <nav>
          <Link to="/Domu">Domů</Link>
          <Link to="/Oprojektu">O projektu</Link>
          <Link to="/Onas">O nás</Link>
          <Link to="/Kontakt">Kontakty</Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Domu />} />
        <Route path="domu" element={<Domu />} />
        <Route path="oprojektu" element={<Oprojektu />} />
        <Route path="onas" element={<Onas />} />
        <Route path="kontakt" element={<Kontakt />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '3rem' }}>
              <p>Tady není vůbec nic!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
);
