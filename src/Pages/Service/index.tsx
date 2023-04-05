import React from "react";
import { Button, Container, Tab, Tabs } from "react-bootstrap";
import mainImg from "../../assets/main.jpg";
import disinsectionImg from "../../assets/disinsection.jpg";
import ratImg from "../../assets/rat.jpg";
import smellImg from "../../assets/smell.jpg";
import cleaningImg from "../../assets/cleaning.jpg";
import { Link } from "react-router-dom";
import styles from "./Service.module.css";

const Service: React.FC = () => {
  const [key, setKey] = React.useState("cleaning");

  return (
    <Container>
      <Tabs
        activeKey={key}
        defaultActiveKey="profile"
        onSelect={(k: any) => setKey(k)}
        id="justify-tab-example"
        className={styles.myClass}
        justify
      >
        <Tab eventKey="cleaning" title="Прибирання">
          <img src={cleaningImg} className="d-block w-100" alt="Image4" />
          <p className="text-center"></p>
          <Link to="/forma">
            <Button variant="success" className="w-100">
              Замовити послугу
            </Button>
          </Link>
        </Tab>
        <Tab eventKey="disinsection" title="Дезінсекція">
          <img src={disinsectionImg} className="d-block w-100" alt="Image0" />
          <p className="text-center">
            Комплекс дій спрямованих на знищення комах.
          </p>
          <Link to="/forma">
            <Button variant="success" className="w-100">
              Замовити послугу
            </Button>
          </Link>
        </Tab>
        <Tab eventKey="deratization" title="Дератизація">
          <img src={ratImg} className="d-block w-100" alt="Image1" />
          <p className="text-center">
            Комплекс дій, спрямованих на позбавлення від гризунів.
          </p>
          <Link to="/forma">
            <Button variant="success" className="w-100">
              Замовити послугу
            </Button>
          </Link>
        </Tab>
        <Tab eventKey="deodorization" title="Дезодорація">
          <img src={smellImg} className="d-block w-100" alt="Image2" />
          <p className="text-center">
            Комплекс дій по усуненню неприємних запахів
          </p>
          <Link to="/forma">
            <Button variant="success" className="w-100">
              Замовити послугу
            </Button>
          </Link>
        </Tab>
        <Tab eventKey="Дезінфекція" title="Дезінфекція">
          <img src={mainImg} className="d-block w-100" alt="Image3" />
          <p className="text-center">
            Боротьба з вірусами та інфекціями <br />
            Дезінфекція підвалів
            <br />
            Дезинфекція коронавірусу
          </p>
          <Link to="/forma">
            <Button variant="success" className="w-100">
              Замовити послугу
            </Button>
          </Link>
        </Tab>
      </Tabs>
      {/* <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="tabs" className="flex-column mt-2">
              <Nav.Item>
                <Nav.Link eventKey="first">Дезінсекція</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Дератизація</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Дезодорація</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">Дезінфекція</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fifth">Прибирання</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>

          <Col sm={9}>
            <Tab.Content className="mt-2">
              <Tab.Pane eventKey="first">
                <img
                  src={disinsectionImg}
                  className="d-block w-100"
                  alt="Image0"
                />
                <p className="text-center">
                  Комплекс дій спрямованих на знищення комах.
                </p>
                <Link to="/forma">
                  <Button variant="success" className="w-100">
                    Замовити послугу
                  </Button>
                </Link>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <img src={ratImg} className="d-block w-100" alt="Image1" />
                <p className="text-center">
                  Комплекс дій, спрямованих на позбавлення від гризунів.
                </p>
                <Link to="/forma">
                  <Button variant="success" className="w-100">
                    Замовити послугу
                  </Button>
                </Link>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <img src={smellImg} className="d-block w-100" alt="Image2" />
                <p className="text-center">
                  Комплекс дій по усуненню неприємних запахів
                </p>
                <Link to="/forma">
                  <Button variant="success" className="w-100">
                    Замовити послугу
                  </Button>
                </Link>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <img src={mainImg} className="d-block w-100" alt="Image3" />
                <p className="text-center">
                  Боротьба з вірусами та інфекціями <br />
                  Дезінфекція підвалів
                  <br />
                  Дезинфекція коронавірусу
                </p>
                <Link to="/forma">
                  <Button variant="success" className="w-100">
                    Замовити послугу
                  </Button>
                </Link>
              </Tab.Pane>
              <Tab.Pane eventKey="fifth">
                <img src={cleaningImg} className="d-block w-100" alt="Image4" />
                <p className="text-center"></p>
                <Link to="/forma">
                  <Button variant="success" className="w-100">
                    Замовити послугу
                  </Button>
                </Link>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container> */}
    </Container>
  );
};

export default Service;
