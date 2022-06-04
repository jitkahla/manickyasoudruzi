import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './Home';
import Contacts from './Contacts';
import AboutProject from './AboutProject';
import AboutUs from './AboutUs';
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
          <a onClick={closeNav} href="/Home">
            Domů
          </a>
          <a onClick={closeNav} href="/AboutProject">
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
          <Link to="/Home">Domů</Link>
          <Link to="/AboutProject">O projektu</Link>
          <Link to="/AboutUs">O nás</Link>
          <Link to="/Contacts">Kontakty</Link>
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
        <Route index element={<Home />} />
        <Route path="domu" element={<Home />} />
        <Route path="oprojektu" element={<AboutProject />} />
        <Route path="onas" element={<AboutUs />} />
        <Route path="kontakt" element={<Contacts />} />
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
