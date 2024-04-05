import React from "react";
import { Card } from "react-bootstrap";
import { MdFavorite } from "react-icons/md";

const ProductCard = ({id,title,description,image,price,category,rating}) => {
  return (
    <Card className="rounded-2 m-auto mb-3 card" role="button">
      <Card.Header className="d-flex justify-content-between">
        <Card.Title>{price} 💲</Card.Title>
        <MdFavorite size={30} />
      </Card.Header>
      <Card.Img variant="top" src={image} className="player-logo" />

      <Card.Footer className="card__over">
        <Card.Title>{title}</Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default ProductCard;
