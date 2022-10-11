import { Col, Container, Row, Button } from "react-bootstrap";
const Intro = () => {
    return (
        <div className="intro">
          <Container className="text-white text-center d-flex justify-content-center align-items-center">
            <Row>
              <Col>
                <div className="title">Nonton Drakor Gratis</div>
                <div className="title">Gak Pake Karcis</div>
                <div className="introButton mt-4 text-center">
                    <Button variant="dark">Lihat Semua List</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    )
}

export default Intro