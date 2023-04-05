import React from "react";
import { Container } from "react-bootstrap";
import s from "./Contacts.module.css";
import aboutUs from "../../assets/aboutUs.jpg";

const Contacts: React.FC = () => {
  return (
    <div>
      <Container>
        <div className="text-center mt-5">
          <h4>Замовити послуги за телефоном</h4>
        </div>
        <div className="text-center">
          <a className={s.link} href="tel:+380966200011">
            <h2>+38(096)6200011</h2>
          </a>
        </div>
        <div className="text-center ">
          <a className={s.link} href="tel:+380996200011">
            <h2>+38(099)6200011</h2>
          </a>
        </div>
        <div className={s.emailContainer}>
          <p className={s.email}>
            E-mail: <p className={s.emailContent}>viacleaning.ua@gmail.com</p>
          </p>
        </div>
        <div className="text-center mt-5">
          <p>Будемо раді відповісти на всі ваші запитання</p>
        </div>
      </Container>
      <img
        className="d-inline-block w-100 align-top"
        src={aboutUs}
        alt="aboutUs"
      />
    </div>
  );
};

export default Contacts;
