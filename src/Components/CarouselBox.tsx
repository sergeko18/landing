import React from "react";
import { Container } from "react-bootstrap";
import mainImg from "../assets/mainCrop.jpg";

const CarouselBox: React.FC = () => {
  return (
    <div>
      <div>
        <img className="d-block w-100 mw-400" src={mainImg} alt="Main slide" />
      </div>
      <div>
        <Container>
          <h3 className="text-center mt-3">VIA cleaning</h3>
          <p className="text-center">
            Якщо ви втомилися від незапрошених гостей, то ви за адресою. Швидко
            і недорого вирішимо всі ваші проблеми щодо комах, гризунів тощо
          </p>
        </Container>
      </div>
    </div>
  );
};

export default CarouselBox;
