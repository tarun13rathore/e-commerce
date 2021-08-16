import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Card } from "react-bootstrap";

const ProductList = [
  {
    id: 1,
    title: "Samsung S21",
    description: "black in color",
    price: "2500",
    image:
      "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: 2,
    title: "Samsung M21",
    description: "white in color",
    price: "2300",
    image:
      "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: 3,
    title: "Redmi 9",
    description: "black in color",
    price: "3500",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71A9Vo1BatL._SL1500_.jpg",
  },
  {
    id: 4,
    title: "Iphone 12",
    description: "Best mobile ever",
    price: "9050",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg",
  },
  {
    id: 5,
    title: "Samsung S21",
    description: "black in color",
    price: "2500",
    image:
      "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: 6,
    title: "Redmi 9",
    description: "black in color",
    price: "3500",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71A9Vo1BatL._SL1500_.jpg",
  },
  {
    id: 7,
    title: "Samsung S21",
    description: "black in color",
    price: "2500",
    image:
      "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: 8,
    title: "Iphone 12",
    description: "Best mobile ever",
    price: "9050",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg",
  },
  {
    id: 9,
    title: "Samsung S21",
    description: "black in color",
    price: "2500",
    image:
      "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: 6,
    title: "Redmi 9",
    description: "black in color",
    price: "3500",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71A9Vo1BatL._SL1500_.jpg",
  },
  {
    id: 7,
    title: "Samsung S21",
    description: "black in color",
    price: "2500",
    image:
      "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: 8,
    title: "Iphone 12",
    description: "Best mobile ever",
    price: "9050",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg",
  },
  {
    id: 9,
    title: "Samsung S21",
    description: "black in color",
    price: "2500",
    image:
      "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
];

const Products = () => {
  return (
    <>
      <Container className="text-center">
        <Row
          style={{
            padding: "0 49px",
            marginTom: "30px",
          }}
        >
          {ProductList.map((prod) => (
            <Card
              style={{
                width: "12rem",
                marginLeft: "20px",
                marginBottom: "5px",
                paddingTop: "5px",
              }}
            >
              <Card.Img
                style={{ width: "150px", height: "100px" }}
                variant="top"
                src={prod.image}
              />
              <Card.Body>
                <Card.Title style={{ fontSize: "14px" }}>
                  {prod.title}
                </Card.Title>
                <Card.Text style={{ fontSize: "10px" }}>
                  {prod.description}
                </Card.Text>
                <Card.Text>Rs /- {prod.price}</Card.Text>
                <Link to="/proDetail">
                  <Button variant="outline-info">show Details</Button>
                </Link>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Products;
