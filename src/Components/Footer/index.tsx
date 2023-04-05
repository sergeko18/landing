import React from "react";
import { Container } from "react-bootstrap";
import s from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={s.wrapper}>
      <Container>
        <div className={s.logo}>VIA cleaning</div>
      </Container>
    </div>
  );
};

export default Footer;
