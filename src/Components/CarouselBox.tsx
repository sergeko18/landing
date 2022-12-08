import React from "react";
import { Carousel } from "react-bootstrap";
import mainImg from "../assets/main.jpg";
import disinsectionImg from "../assets/disinsection.jpg";
import ratImg from "../assets/rat.jpg";
import smellImg from "../assets/smell.jpg";

const CarouselBox: React.FC = () => {
  return (
    <div>
      <Carousel variant="dark" className="mw-100 mh-75">
        <Carousel.Item>
          <img
            className="d-block w-100 mw-400 opacity-25"
            src={mainImg}
            alt="Main slide"
          />
          <Carousel.Caption>
            <h3>VIA cleaning</h3>
            <p>
              Якщо ви втомилися від незапрошених гостей, то ви за адресою.
              Швидко і недорого вирішимо всі ваші проблеми щодо комах, гризунів
              тощо
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 mw-400 opacity-50"
            src={disinsectionImg}
            alt="Main slide"
          />
          <Carousel.Caption>
            <h3>Дезінсекція</h3>
            <p>комплекс дій спрямованих на знищення комах.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 mw-400 opacity-50"
            src={ratImg}
            alt="disinsection slide"
          />
          <Carousel.Caption>
            <h3>Дератизація</h3>
            <p>комплекс дій, спрямованих на позбавлення від гризунів.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 mw-400 opacity-75"
            src={smellImg}
            alt="Main slide"
          />
          <Carousel.Caption>
            <h3>Дезодорація</h3>
            <p>комплекс дій по усуненню неприємних запахів</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselBox;
