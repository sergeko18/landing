import React from "react";
import { Button, Card, CardGroup, Container } from "react-bootstrap";
import mainImg from "../assets/main.jpg";
import disinsectionImg from "../assets/disinsection.jpg";
import ratImg from "../assets/rat.jpg";
import smellImg from "../assets/smell.jpg";
import { Link } from "react-router-dom";

const ServiceComponent = () => {
  return (
    <Container>
      <h3 className="text-center mt-4">Послуги</h3>

      <CardGroup className="m-4">
        <Card className="m-auto" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={disinsectionImg} />
          <Card.Body>
            <Card.Title className="text-center">Дезінсекція</Card.Title>
            <Card.Text className="text-center">
              Знищення усіх видів комах
            </Card.Text>
            <Link to="/forma">
              <Button className="w-100" variant="success">
                Замовити
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup className="m-4">
        <Card className="m-auto" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={ratImg} />
          <Card.Body>
            <Card.Title className="text-center">Дератизація</Card.Title>
            <Card.Text className="text-center">
              Позбавлення від щурів і мишей.
            </Card.Text>
            <Link to="/forma">
              <Button className="w-100" variant="success">
                Замовити
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup className="m-4">
        <Card className="m-auto" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={smellImg} />
          <Card.Body>
            <Card.Title className="text-center">Дезодорація</Card.Title>
            <Card.Text className="text-center">
              Знищення неприємних запахів.
            </Card.Text>
            <Link to="/forma">
              <Button className="w-100" variant="success">
                Замовити
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup className="m-4">
        <Card className="m-auto" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={mainImg} />
          <Card.Body>
            <Card.Title className="text-center">Дезінфекція</Card.Title>
            <Card.Text className="text-center">
              Боротьба з вірусами та інфекціями
            </Card.Text>
            <Link to="/forma">
              <Button className="w-100" variant="success">
                Замовити
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
};

export default ServiceComponent;
