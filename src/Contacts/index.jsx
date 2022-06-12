import React from 'react';
import './style.css';

const Contacts = () => {
  return (
    <main>
      <h2>Kontakty</h2>
      <div className="contact">
        <div className="manicka">
          <img
            className="profile-img"
            id="jitka-img"
            src="img/jitka_profile.jpg"
            alt="Jitka Hladká"
          />
          <h3>Jitka Hladká</h3>
          <div className="contact__detail">
            <img className="icon" src="img/email_icon.png" alt="e-mail icon" />
            <p>jitka.hladka@gmail.com</p>
          </div>
          <div className="contact__detail">
            <img
              className="icon"
              src="img/linkedin_icon.png"
              alt="LinkedIn icon"
            />
            <p>
              <a href="https://linkedin.com/in/jitka-hladká-5a9b68228">
                Jitka Hladká
              </a>
            </p>
          </div>
          <div className="contact__detail">
            <img className="icon" src="img/github_icon.png" alt="GitHub icon" />
            <p>
              <a href="https://github.com/jitkahla">jitkahla</a>
            </p>
          </div>
        </div>
        <div className="manicka">
          <img
            className="profile-img"
            id="veronika-img"
            src="img/veronika_profile.jpg"
            alt="Veronika Sesay"
          />
          <h3>Veronika Sesay</h3>
          <div className="contact__detail">
            <img className="icon" src="img/email_icon.png" alt="e-mail icon" />
            <p>veronika.sesay@gmail.com</p>
          </div>
          <div className="contact__detail">
            <img
              className="icon"
              src="img/linkedin_icon.png"
              alt="LinkedIn icon"
            />
            <p>
              <a href="https://linkedin.com/in/veronika-sesay-cz">
                Veronika Sesay
              </a>
            </p>
          </div>
          <div className="contact__detail">
            <img
              className="icon"
              src="/img/github_icon.png"
              alt="GitHub icon"
            />
            <p>
              <a href="https://github.com/veronika-sesay">veronika-sesay</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contacts;
