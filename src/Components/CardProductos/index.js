import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import data from "../Mocks/phones.json";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const CardProductos = () => {
  const phones = data.phones;
  return (
    <>
      {phones?.map((celular, index) => {
        return (
          <div key={index} className="p-2">

            <Row xs={1} md={4} className="g-4">
              {Array.from({ length: 4 }).map((_, idx) => (
                <Col>

                  <Card style={
                    {
                      width: "300px",
                      height: "300px",

                    }
                  }>
                    <Card.Img
                      style={{
                        width: "140px",
                        height: "140px",


                      }} variant="top" src={celular.image} />
                    <Card.Body >
                      <Card.Title>{celular.name}</Card.Title>
                      <Card.Text>
                        {celular.Description}
                      </Card.Text>
                      <Button
                        style={{
                        }} >Comprar</Button>
                    </Card.Body>

                  </Card>

                </Col>
              ))}
            </Row >
          </div >


        );
      })}
    </>
  );
};

