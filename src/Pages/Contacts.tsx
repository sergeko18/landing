import React from "react";
import { Container } from "react-bootstrap";

const Contacts: React.FC = () => {
  return (
    <Container>
      <div className="text-center mt-5">
        <h4>Замовити послуги за телефоном</h4>
      </div>
      <div className="text-center">
        <h2>+38(095)6200011</h2>
      </div>
      <div className="text-center">
        <h2>+38(096)6200011</h2>
      </div>
      <div className="text-center mt-5">
        <p>Будемо раді відповісти на всі ваші запитання</p>
      </div>
    </Container>
  );
};

export default Contacts;
