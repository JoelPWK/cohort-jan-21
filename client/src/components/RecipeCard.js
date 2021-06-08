import React from "react";
import { Button, Card } from "react-bootstrap";

const RecipeCard = (props) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://picsum.photos/200" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            ipsum risus, suscipit ac venenatis sit amet, pellentesque eget
            felis. Proin augue nulla, fermentum sed egestas a, commodo non erat.
            Sed id interdum velit, eget tempus nisi. Cras in sagittis justo. In
            congue faucibus magna, aliquam ornare velit dignissim viverra.
            Maecenas pharetra venenatis felis, rutrum sodales ligula ultricies
            ac. In posuere vestibulum elit, et finibus nunc vestibulum ac.
            Nullam eleifend tempus est in viverra. Donec ante arcu, efficitur
            nec mi at, ullamcorper facilisis justo. Phasellus congue condimentum
            nisl lobortis aliquet. Vivamus sit amet fringilla urna. Integer id
            sagittis ex. Sed ullamcorper.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RecipeCard;
