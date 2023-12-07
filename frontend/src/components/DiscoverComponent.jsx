// Discover.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Pagination } from "react-bootstrap";
import "../styles/Discover.scss";

const Discover = () => {
  const [books, setBooks] = useState([]);
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          "https://www.googleapis.com/books/v1/volumes?q=javascript"
        );
        const data = await response.json();

        if (data.items) {
          const mappedData = data.items.map((item) => ({
            id: item.id,
            title: item.volumeInfo.title,
            author: item.volumeInfo.authors
              ? item.volumeInfo.authors.join(", ")
              : "Unknown Author",
            imageUrl: item.volumeInfo.imageLinks
              ? item.volumeInfo.imageLinks.thumbnail
              : "https://via.placeholder.com/128",
            description:
              item.volumeInfo.description || "No description available",
          }));
          setBooks(mappedData);
        }
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBooks = books.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container className="mt-4">
      <h2>Discover New Books</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {currentBooks.map((book) => (
          <Col key={book.id} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={book.imageUrl}
                alt={book.title}
                className="book-image"
              />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {book.author}
                </Card.Subtitle>
                <Link to={`/book/${book.id}`}>
                  <Button variant="primary">Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="d-flex justify-content-center">
        <Pagination>
          {[...Array(Math.ceil(books.length / itemsPerPage))].map(
            (_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            )
          )}
        </Pagination>
      </div>
    </Container>
  );
};

export default Discover;
