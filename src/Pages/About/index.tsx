import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import aboutUs from "../../assets/aboutUs.jpg";
import s from "./About.module.css";

const About: React.FC = () => {
  return (
    <div className={s.container}>
      <img className="d-block w-100 mw-400" src={aboutUs} alt="text" />
      <Container>
        <h6>
          Ми проводимо обробку в установах охорони здоров'я, закладах сфери
          відпочинку та розваг, місцях тимчасового проживання (готелі,
          гуртожитки, кемпінги, хостели і т.д.), дитячих дошкільних і навчальних
          закладах,спортивно-оздоровчих комплексах, підприємствах громадського
          харчування і торгівлі, косметологічних салонах (включаючи перукарські,
          манікюрні та педикюрні кабінети), громадських вбиральнях, на
          залізничному (включаючи рухомий склад), автомобільному, водному і
          повітряному транспорті, в побуті.
        </h6>
        <ul className="mt-5">
          <li>У нас є сертифікати спеціальної підготовки.</li>
          <li>Допуски до роботи використовуючи пестициди і агрохімікати.</li>
          <li>Знищимо шкідників з першої обротботки.</li>
          <li>
            {" "}
            Використовуємо сертифіковані препарати провідних світових фірм BASF,
            Bayer та Syngenta, які дозволяють отримати надійний результат з
            першої обробки.
          </li>
          <li>Команда професіоналів виконає обробку будь-якої складності.</li>
          <li>Тисячі задоволених клієнтів обирають нас.</li>
          <li>Маємо величезний опти роботи за плечима.</li>
          <li>
            {" "}
            Проводимо обробку високоефективними європейськими препаратами, які
            не мають запаху.
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default About;
