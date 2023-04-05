import React from "react";
import mainImg from "../../assets/Crop/main.jpg";
import disinsectionImg from "../../assets/Crop/disinsection.jpg";
import styles from "./ServiceComponent.module.css";
import ratImg from "../../assets/Crop/rat.jpg";
import smellImg from "../../assets/Crop/smell.jpg";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ServiceComponent = () => {
  return (
    <div className={styles.root}>
      <h5 className="text-center mt-5">Послуги :</h5>

      <Row>
        <Col xs={12} md={6}>
          <div className={styles.container}>
            <Link to="/forma">
              <img
                className="d-block w-100 mw-400"
                src={disinsectionImg}
                alt="disinsection"
              />
            </Link>

            <div className={styles.text1}>
              <h2>Дезінсекція</h2>
              <p>Знищення усіх видів комах</p>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className={classNames(styles.container, styles.whiteText)}>
            <Link to="/forma">
              <img
                className="d-block w-100 mw-400"
                src={ratImg}
                alt="disinsection"
              />
            </Link>

            <div className={styles.text1}>
              <h2>Дератизація</h2>
              <p>Позбавлення від щурів і мишей.</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <div className={styles.container}>
            <Link to="/forma">
              <img
                className="d-block w-100 mw-400"
                src={smellImg}
                alt="disinsection"
              />
            </Link>

            <div className={styles.text1}>
              <h2>Дезодорація</h2>
              <p>Знищення неприємних запахів.</p>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className={styles.container}>
            <Link to="/forma">
              <img
                className="d-block w-100 mw-400"
                src={mainImg}
                alt="disinsection"
              />
            </Link>

            <div className={styles.text1}>
              <h2>Дезінфекція</h2>
              <p>Боротьба з вірусами та інфекціями</p>
            </div>
          </div>
        </Col>
      </Row>
      {/* <h5 className="text-center mt-5">Послуги :</h5>

      <div className={styles.container}>
        <img
          className="d-block w-100 mw-400"
          src={disinsectionImg}
          alt="disinsection"
        />
        <div className={styles.text1}>
          <h2>Дезінсекція</h2>
          <p>Знищення усіх видів комах</p>
        </div>
      </div>

      <div className={classNames(styles.container, styles.whiteText)}>
        <img className="d-block w-100 mw-400" src={ratImg} alt="disinsection" />
        <div className={styles.text1}>
          <h2>Дератизація</h2>
          <p>Позбавлення від щурів і мишей.</p>
        </div>
      </div>

      <div className={styles.container}>
        <img
          className="d-block w-100 mw-400"
          src={smellImg}
          alt="disinsection"
        />
        <div className={styles.text1}>
          <h2>Дезодорація</h2>
          <p>Знищення неприємних запахів.</p>
        </div>
      </div>

      <div className={styles.container}>
        <img
          className="d-block w-100 mw-400"
          src={angarImg}
          alt="disinsection"
        />
        <div className={styles.text1}>
          <h2>Дезінфекція</h2>
          <p>Боротьба з вірусами та інфекціями</p>
        </div>
      </div> */}
    </div>
  );
};

export default ServiceComponent;
