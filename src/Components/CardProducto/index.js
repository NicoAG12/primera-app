import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import data from "../Mocks/Celulares.json"

export const CardProducto = () => {
    const phones = data.phones
    console.log(phones[1].name);
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Prueba producto</Card.Title>
                <Card.Text>
                    Esta seria la descripcion del producto
                </Card.Text>
                <Button variant="primary">Comprar</Button>
            </Card.Body>
        </Card>
    );
}