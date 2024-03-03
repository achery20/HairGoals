import React, { useState, useEffect } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import CustomNavbar from './Navbar'; // Import the Navbar component
import ProductReviews from './ProductReviews'

const PanteneProduct = () => {
    // const RainforestApiKey = process.env.REACT_APP_RAINFOREST_API_KEY;
    const [reviewData, setReviewData] = useState(null);
    useEffect(() => {
        const fetchReviewData = async () => {
          try {
            const response = await fetch(`https://api.rainforestapi.com/request?api_key=${process.env.REACT_APP_RAINFOREST_API_KEY}&type=reviews&asin=B09CJHL1CJ&reviewer_type=all&review_stars=all_stars&review_formats=all_formats&sort_by=most_helpful&language=en_US&amazon_domain=amazon.com&global_reviews,=false`);
            const data = await response.json();
            setReviewData(data);
          } catch (error) {
            console.error('Error fetching review data:', error);
          }
        };
    
        fetchReviewData();
      }, []);

    return ( 
        <Container>
            <CustomNavbar/>
            <Row>
                {/* Image column */}
                <div class="product-page-image">
                    <Col md={12}>
                        <img src={"https://i.ytimg.com/vi/fFZZS7WYRDU/maxresdefault.jpg"} alt="Pantene Shampoo" ></img>
                    </Col>
                </div>

                {/* Content column */}
                <Col md={12}>
                    {/* Add your content here */}
                    <h2>Pantene Pro-V Gold Series Moisture Boost Shampoo</h2>
                    <p>Promotes hair growth and a healthy scalp</p>
                    <Button variant="primary" onClick={() => window.location.href = 'https://www.amazon.com/Pantene-Shampoo-Moisture-Natural-Textured/dp/B01M1NBIHC'}>Shop</Button>
                </Col>
            {/* Product reviews section */}
            </Row>
            <div>
                <ProductReviews reviewData={reviewData} />
            </div>
        </Container>
        
        
        
    );
}
export default PanteneProduct;

