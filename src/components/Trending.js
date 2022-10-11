import { Card, Container, Row, Col, Image } from "react-bootstrap";
import brImages from "../assets/images/Trending/BR.jpg";
import clImages from "../assets/images/Trending/CL.jpg";
import wwwskImages from "../assets/images/Trending/WWWSK.jpg";
import bpImages from "../assets/images/Trending/BP.jpg";
import hdlImages from "../assets/images/Trending/HDL.jpg";
import mriagImages from "../assets/images/Trending/MRIAG.jpg";

const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-dark">TRENDING DRAMA</h1>
        <br />
        <Row>
          <Col md={4} className="drakorWrapper" id="trending">
            <Card className="drakorImage">
              <Image src={brImages} alt="Backstreet Rookie" className="images"/>
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Card title</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="drakorWrapper">
            <Card className="drakorImage">
              <Image src={clImages} alt="Crazy Love" className="images"/>
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Card title</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="drakorWrapper">
            <Card className="drakorImage">
              <Image src={wwwskImages} alt="What's Wrong With Secretary Kim" className="images"/>
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Card title</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="drakorWrapper">
            <Card className="drakorImage">
              <Image src={bpImages} alt="Business Proposal" className="images"/>
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Card title</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="drakorWrapper">
            <Card className="drakorImage">
              <Image src={hdlImages} alt="Hotel Del Luna" className="images"/>
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Card title</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="drakorWrapper">
            <Card className="drakorImage">
              <Image src={mriagImages} alt="My Roomate Is a Gumiho" className="images"/>
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Card title</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Trending;
