import React from 'react';
import './style.css';
import jitkaImg from '../img/jitka_profile.jpg';
import veronikaImg from '../img/veronika_profile.jpg';
import emailIcon from '../img/email_icon.png';
import phoneIcon from '../img/phone_icon.png';
import linkedInIcon from '../img/linkedin_icon.png';
import githubIcon from '../img/github_icon.png';

const Contacts = () => {
  return (
    <main>
      <h2>Kontakty</h2>
      <div className="contact">
        <div className="manicka">
          <img
            className="profile-img"
            id="jitka-img"
            src={jitkaImg}
            alt="Jitka Hladká"
          />
          <h3>Jitka Hladká</h3>
          <div className="contact__detail">
            <img className="icon" src={emailIcon} alt="e-mail icon" />
            <p>jitka.hladka@gmail.com</p>
          </div>
          <div className="contact__detail">
            <img className="icon" src={phoneIcon} alt="phone icon" />
            <p>+420 739 660 649</p>
          </div>
          <div className="contact__detail">
            <img className="icon" src={linkedInIcon} alt="LinkedIn icon" />
            <p>
              <a href="https://linkedin.com/in/jitka-hladká-5a9b68228">
                Jitka Hladká
              </a>
            </p>
          </div>
          <div className="contact__detail">
            <img className="icon" src={githubIcon} alt="GitHub icon" />
            <p>
              <a href="https://github.com/jitkahla">jitkahla</a>
            </p>
          </div>
        </div>
        <div className="manicka">
          <img
            className="profile-img"
            id="veronika-img"
            src={veronikaImg}
            alt="Veronika Sesay"
          />
          <h3>Veronika Sesay</h3>
          <div className="contact__detail">
            <img className="icon" src={emailIcon} alt="e-mail icon" />
            <p>veronika.sesay@gmail.com</p>
          </div>
          <div className="contact__detail">
            <img className="icon" src={phoneIcon} alt="phone icon" />
            <p>+420 775 955 051</p>
          </div>
          <div className="contact__detail">
            <img className="icon" src={linkedInIcon} alt="LinkedIn icon" />
            <p>
              <a href="https://linkedin.com/in/veronika-sesay-cz">
                Veronika Sesay
              </a>
            </p>
          </div>
          <div className="contact__detail">
            <img className="icon" src={githubIcon} alt="GitHub icon" />
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
