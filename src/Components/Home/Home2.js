import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import EmailIcon from "@mui/icons-material/Email";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a passionate Backend Developer from Pakistan, deeply interested in computer science. 
              With expertise in <i> <b className="purple"> Node.js, Golang, Gin, and Nest.js </b> </i>
              I craft robust and efficient systems. 
              I specialize in <i> <b className="purple"> Micro-services Architecture</b></i>, 
              leveraging technologies like<i> <b className="purple">Kafka </b> </i>and <i> <b className="purple">gRPC</b></i> for seamless data flow and communication. 
              I excel in designing and implementing <i> <b className="purple">REST APIs</b> </i>for seamless integration. 
              Join me on an innovative journey where we harness Node.js, Golang, Gin, Nest.js, microservices, Kafka, gRPC, and REST APIs to shape the digital landscape. 
              <i> <b className="purple">Let's push the boundaries of what's possible in computer science together.</b></i>
              </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>
              Feel free to <span className="purple"> Connect </span> with me
            </h1>
            
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/abdulsamad619"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:abdulsamad.p98@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <EmailIcon />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/abdulsamadpervaiz/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
              <a
                  href="https://stackoverflow.com/users/18118585/ahmed-ali"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaStackOverflow />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
