import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import './ProductReviews.css'
const ProductReviews = ({ reviewData }) => {
  const [visibleReviews, setVisibleReviews] = useState(5); // Number of initially visible reviews

  if (!reviewData || !reviewData.reviews) {
    return <div>Loading Product Reviews...</div>;
  }

  const { reviews } = reviewData;

  const loadMoreReviews = () => {
    setVisibleReviews(prevVisibleReviews => prevVisibleReviews + 5); // Increase the number of visible reviews by 5
  };

  return (
    <div class="reviews">
      <h2>Product Reviews</h2>
      {reviews.slice(0, visibleReviews).map(review => (
        <Card key={review.id} className="review-card">
          <Card.Body>
            <Card.Title>{review.title}</Card.Title>
            <Card.Text>{review.body}</Card.Text>
            <Card.Text>Rating: {review.rating}</Card.Text>
            <Card.Text>Reviewed by: {review.profile.name}</Card.Text>
            <Card.Text>Date: {review.date.raw}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    
      {visibleReviews < reviews.length && (
        <div class="reviewButton"> 
            <Button variant="secondary" size="sm" onClick={loadMoreReviews}>Load More Reviews
            </Button>
        </div>
        
      )}
      
    </div>
    
  );
};

export default ProductReviews;




