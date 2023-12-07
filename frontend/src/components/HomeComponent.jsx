// Home.js
import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "../styles/Home.scss";

const Home = () => {
  const featuredBooks = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 3, title: "1984", author: "George Orwell" },
  ];

  const latestReleases = [
    { id: 4, title: "The Silent Patient", author: "Alex Michaelides" },
    { id: 5, title: "Where the Crawdads Sing", author: "Delia Owens" },
    { id: 6, title: "Educated", author: "Tara Westover" },
  ];

  const getPlaceholderImageUrl = (width, height) => {
    // Use Lorem Picsum for placeholder images
    return `https://picsum.photos/${width}/${height}`;
  };

  return (
    <div className="home-container">
      <section
        className="hero"
        style={{
          backgroundImage: `url('https://source.unsplash.com/1920x1080/?books')`,
        }}
      >
        <Container className="welcome-text">
          <h1>Welcome to My Book Market</h1>
          <p>
            Your one-stop destination for discovering and exploring new books.
          </p>
          <Button variant="primary">Get Started</Button>
        </Container>
      </section>

      <section className="featured-section mt-3">
        <Container>
          <h2>Featured Books</h2>
          <Row>
            {featuredBooks.map((book) => (
              <Col key={book.id} md={4}>
                <Card>
                  <Card.Img
                    variant="top"
                    src={getPlaceholderImageUrl(300, 200)}
                    alt={book.title}
                  />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {book.author}
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="latest-releases-section mt-3 pb-4">
        <Container>
          <h2>Latest Releases</h2>
          <Row>
            {latestReleases.map((book) => (
              <Col key={book.id} md={4}>
                <Card>
                  <Card.Img
                    variant="top"
                    src={getPlaceholderImageUrl(300, 200)}
                    alt={book.title}
                  />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {book.author}
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
