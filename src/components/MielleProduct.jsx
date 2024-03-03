import React, { useState, useEffect } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import CustomNavbar from './Navbar'; // Import the Navbar component
import ProductReviews from './ProductReviews'

const MielleProduct = () => {
    const [reviewData, setReviewData] = useState(null);
    useEffect(() => {
        const fetchReviewData = async () => {
          try {
            const response = await fetch(`https://api.rainforestapi.com/request?api_key=${process.env.REACT_APP_RAINFOREST_API_KEY}&type=reviews&amazon_domain=amazon.com&asin=B07N7PK9QK&reviewer_type=all&language=en_US&sort_by=most_helpful&global_reviews,=false&review_formats=all_formats&review_stars=all_stars`);
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
                        <img src={"https://media.allure.com/photos/640aa77eed00b02cc3921cb4/master/pass/abb-mielle.jpg"} alt="Mielle Hair Oil" ></img>
                    </Col>
                </div>

                {/* Content column */}
                <Col md={12}>
                    {/* Add your content here */}
                    <h2>Rosemary mint scalp & hair strengthening oil</h2>
                    <p>Promotes hair growth and a healthy scalp</p>
                    <Button variant="primary" onClick={() => window.location.href = 'https://www.amazon.com/Mielle-Rosemary-Mint-Scalp-Strengthening/dp/B07N7PK9QK/ref=asc_df_B07N7PK9QK/?tag=hyprod-20&linkCode=df0&hvadid=318979766632&hvpos=&hvnetw=g&hvrand=11859353246424301114&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9004346&hvtargid=pla-635842549659&psc=1&mcid=a3ba245b233a3781bc07aaacd8f96d1b&gclid=CjwKCAiAloavBhBOEiwAbtAJO0bTvbSgDfLiMoYQ86-gwZEzMdmnEygdqclkhsQUIzv4H-XbWYzQyxoC_SwQAvD_BwE'}>Shop</Button>
                </Col>
            {/* Product reviews section */}
            </Row>
            <div>
                <ProductReviews reviewData={reviewData} />
            </div>
        </Container>
        
        
        
    );
}
export default MielleProduct;

