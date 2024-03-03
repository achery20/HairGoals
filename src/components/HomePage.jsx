// Your React component
import React from 'react';
import { Container, Button, Carousel, Row, Col, Card } from 'react-bootstrap';
import CustomNavbar from './Navbar'; // Import the Navbar component
import './HomePage.css';
const HomePage = () => {
  return (
    <Container>
      
      {/* Reusable Navbar */}
      
      <CustomNavbar />
      {/* Landing Page Section */}
      <div id="mainHeader" >
        <h1>HAIR GOALS</h1>
        <p>
        Doing your hair can be challenging. Let's help you make it easier.
        </p>
        <p>
          <Button variant="primary btn">Our Mission</Button>
        </p>
      </div>
      
      <Carousel className="rounded">
        <Carousel.Item className = "carousel-item">
          <img
            className="d-block w-100"
            src="https://www.lorealparisusa.com/-/media/project/loreal/brand-sites/oap/americas/us/beauty-magazine/2023/07-july/7-17/how-to-care-for-4c-hair/loreal-paris-4c-hair.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>All Hair is Good Hair</h3>
            <p>You're beautiful just the way you are</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* item 2 */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.paramount.tech/uri/mgid:arc:imageassetref:bet.com:bb1e2d0f-34f5-4078-b58a-3fb2fccbb2d7?quality=0.7&gen=ntrn&legacyStatusCode=true" 
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Embrace your Curls</h3>
            <p>Black is Beautiful</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.beautyindependent.com/wp-content/uploads/2021/04/Melanin-Desktop-2000px-2000x1000.jpg" 
            alt="Mielle"
          />
          <Carousel.Caption>
            <h3>Melanin Hair Care</h3>
            <p>Finesse your wash day</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Top Products Section */}
      <Col md={12} className="text-center">
        <h2 className="mt-4">Trending Products</h2>
      </Col>
      <Container>
        <Row>
          <Col className="d-flex"> 
            {/* Product 1 */}

              <Card className="product-card flex-fill">
              <a href="/panteneshampoo">
                <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71OLl5t6xVL._AC_UF1000,1000_QL80_.jpg"/>
              </a>
                <Card.Body>
                  <Card.Title>Pantene Gold Series</Card.Title>
                  <Card.Text>
                    Moisture Boost Shampoo Infused with Argan Oil
                  </Card.Text>
                  <Button variant="primary" onClick={() => window.location.href = 'https://www.amazon.com/Pantene-Shampoo-Moisture-Natural-Textured/dp/B01M1NBIHC'}>Shop</Button>
                </Card.Body>
              </Card>
            
          </Col>

          {/* Product 2 */}
          <Col className="d-flex"> 

              <Card className="product-card flex-fill">
                <a href="/mielleoil">
                  <Card.Img variant="top" src="https://i5.walmartimages.com/asr/4dd9ddb2-d7e4-41b8-8e17-74ad063ccb81.6a960ec48ec8cb1776de83789ac046ae.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF" />
                </a>
                <Card.Body>
                  <Card.Title>Mielle</Card.Title>
                  <Card.Text>
                    Rosemary mint scalp & hair strengthening oil
                  </Card.Text>
                  <Button variant="primary" onClick={() => window.location.href = 'https://www.target.com/p/mielle-organics-rosemary-mint-scalp-38-strengthening-hair-oil-2-fl-oz/-/A-75566105'}>Shop</Button>
                </Card.Body>
              </Card>
          </Col>

          {/* Product 3 */}
          <Col className="d-flex"> 
            
              <Card className="product-card flex-fill">
                <a href="/carolsdaughtermoisturizer">
                  <Card.Img variant="top" src="https://www.gosupps.com/media/catalog/product/cache/25/image/1500x/040ec09b1e35df139433887a97daa66f/9/1/91AdBJSKkgL._SL1500_.jpg" />
                </a>
                <Card.Body>
                  <Card.Title>Carol's Daughter</Card.Title>
                  <Card.Text>
                    Black Vanilla Leave-in Conditioner
                  </Card.Text>
                  <Button variant="primary" onClick={() => window.location.href = 'https://www.amazon.com/Carols-Daughter-Moisture-Conditioner-Packaging/dp/B001AWXPAY/ref=sr_1_1_sspa?crid=3LFE01N9NT39D&dib=eyJ2IjoiMSJ9.UAH_-vVMXw1WE53a8sq0sA7aS3n7re1jopJj3o34mtxbDthRQZwRpYnB_hGNjA7Gs1MqhjlKCKwnWtDetUHasSS_ScuScy_zzCAiaRmAMUeWYkOOUA62BKuJNcyOb4ynurXV5cxKxOVUlzHRYnxf2HD1DUobilzwB4FJWNJ15gxp45UYgbTY7_2be9aEIbFhAjE3O-F0f8LthL_eXr5agR3FpOTqrV6yNhjUGiH-aKn9O0jqXMSI4rzKSRTMJ4Q2uY-E0kgqoCFJLIGq3NzkiiTBVjjv4ezFx1_pfVR1Tjs.Y2EB5AhsoRP0GmyD_c31-RLWjvZvG1J-ns-u_crnNwk&dib_tag=se&keywords=Black+Vanilla+Hydrating+Leave-in+Conditioner&qid=1709366525&rdc=1&s=beauty&sprefix=black+vanilla+hydrating+leave-in+conditioner%2Cbeauty%2C144&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'}>Shop</Button>
                </Card.Body>
              </Card>
          </Col>
        </Row>
        </Container>
      
      {/* Slideshow Section */}
      {/* Top Hairstyles Section */}
      <Col md={12} className="text-center">
        <h2 className="mt-4">Popular Hairstyles</h2>
      </Col>
      <Carousel className="mt-4 rounded">
        <Carousel.Item className = "carousel-item">
          <img
            className="d-block w-100"
            src="https://i.ytimg.com/vi/7brFcm-4V8Q/maxresdefault.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3></h3>
            <p>Description for slide 1.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        {/* Add more Carousel.Items as needed */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/736x/08/f8/3c/08f83c8b56dde28591b6c24dd36133e0.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            {/* <h3>Juicy Twist out</h3> */}
            {/* <p></p> */}
          </Carousel.Caption>
        </Carousel.Item>
        {/* Add more Carousel.Items as needed */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ytimg.com/vi/tdQ3olrxOcY/maxresdefault.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            {/* <h3>Bouncy Spring Twists</h3> */}
            {/* <p>Description for slide 2.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ytimg.com/vi/EBw_4f0mPZo/maxresdefault.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            {/* <h3>Slide 2</h3>
            <p>Description for slide 2.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ytimg.com/vi/yDKkVNehn9s/maxresdefault.jpg"
            alt="Second slide"
          />
          
        </Carousel.Item>
      </Carousel>
    </Container>

  );
}

export default HomePage;
