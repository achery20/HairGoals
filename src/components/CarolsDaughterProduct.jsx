import React, { useState, useEffect } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import CustomNavbar from './Navbar'; // Import the Navbar component
import ProductReviews from './ProductReviews'

const CarolsDaughterProduct = () => {
    const [reviewData, setReviewData] = useState(null);
    useEffect(() => {
        const fetchReviewData = async () => {
          try {
            const response = await fetch(`https://api.rainforestapi.com/request?api_key=${process.env.REACT_APP_RAINFOREST_API_KEY}&type=reviews&amazon_domain=amazon.com&asin=B001AWXPAY&reviewer_type=all&language=en_US&sort_by=most_helpful&global_reviews,=false&review_formats=all_formats&review_stars=all_stars`);


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
                        <img src={"https://m.media-amazon.com/images/I/915vUbpSObL._AC_UF1000,1000_QL80_.jpg"} alt="Shea Moisture Deep Conditioner" ></img>
                    </Col>
                </div>

                {/* Content column */}
                <Col md={12}>
                    {/* Add your content here */}
                    <h2>Black Vanilla Hydrating Leave-in Conditioner</h2>
                    <p>Replenishes Moisture, Improves Manageability, Adds Shine For Dry and Brittle Hair</p>
                    <Button variant="primary" onClick={() => window.location.href = 'https://www.amazon.com/Carols-Daughter-Moisture-Conditioner-Packaging/dp/B001AWXPAY/ref=sr_1_1_sspa?crid=3LFE01N9NT39D&dib=eyJ2IjoiMSJ9.UAH_-vVMXw1WE53a8sq0sA7aS3n7re1jopJj3o34mtxbDthRQZwRpYnB_hGNjA7Gs1MqhjlKCKwnWtDetUHasSS_ScuScy_zzCAiaRmAMUeWYkOOUA62BKuJNcyOb4ynurXV5cxKxOVUlzHRYnxf2HD1DUobilzwB4FJWNJ15gxp45UYgbTY7_2be9aEIbFhAjE3O-F0f8LthL_eXr5agR3FpOTqrV6yNhjUGiH-aKn9O0jqXMSI4rzKSRTMJ4Q2uY-E0kgqoCFJLIGq3NzkiiTBVjjv4ezFx1_pfVR1Tjs.Y2EB5AhsoRP0GmyD_c31-RLWjvZvG1J-ns-u_crnNwk&dib_tag=se&keywords=Black+Vanilla+Hydrating+Leave-in+Conditioner&qid=1709366525&rdc=1&s=beauty&sprefix=black+vanilla+hydrating+leave-in+conditioner%2Cbeauty%2C144&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'}>Shop</Button>
                </Col>
            {/* Product reviews section */}
            </Row>
            <div>
                <ProductReviews reviewData={reviewData} />
            </div>
        </Container>
        
        
        
    );
}
export default CarolsDaughterProduct;

