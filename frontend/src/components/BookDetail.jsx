// BookDetail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Col, Row, Button } from "react-bootstrap";
import "../styles/BookDetails.scss"; // Import the SCSS file

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes/${id}`
        );
        const data = await response.json();
        setBook(data.volumeInfo); // Update state with fetched book details
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (!book) {
    // Loading state or book not found
    return (
      <Container className="mt-4">
        <p>Loading...</p>
      </Container>
    );
  }

  return (
    <Container className="mt-4 book-detail-container">
      <Row>
        <Col md={6}>
          {/* First column: Book image */}
          <img
            src={
              book.imageLinks
                ? book.imageLinks.medium
                : "https://via.placeholder.com/128"
            }
            alt={book.title}
            className="book-image"
          />
        </Col>
        <Col md={6}>
          {/* Second column: Book details */}
          <div className="book-details">
            <h2 className="book-title">{book.title}</h2>
            <p className="book-author">
              {book.authors ? book.authors.join(", ") : "Unknown Author"}
            </p>
            <p className="book-description">
              {book.description || "No description available"}
            </p>
            <Button variant="primary" className="add-to-cart-btn">
              Add to Cart
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BookDetail;
