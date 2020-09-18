import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_LOGO from "../../assets/img/experience/speechcorp.png";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_LOGO} alt="Accenture logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Web Developer | App Developer</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <br />
                    <strong>Role:</strong> Developer 
                    <br />
                    <strong>Description:</strong> <strong>Developed & enhanced multiple features</strong> on main landing website.
                    <br />
                    Also currently working as <strong>App Developer</strong> developing app with React Native.
                    <br />
                    <strong>Technology:</strong> React.js, Next.js, Tailwind  css, FastAPI
                    <br />
                    <strong>Duration:</strong> June 2020 - Present
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
