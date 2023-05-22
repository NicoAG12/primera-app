import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import data from "../Mocks/phones.json";

export const CardProductos = () => {
  const phones = data.phones;
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {phones?.map((celular, index) => {
        return (
          <div key={index}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={celular.image}
                width="100px"
                height="100px"
              />
              <Card.Body>
                <Card.Title>{celular.name}</Card.Title>
                <Card.Text>{celular.Description}</Card.Text>
                <Card.Text>{celular.price}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};
