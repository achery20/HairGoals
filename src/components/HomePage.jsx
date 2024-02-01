// Your React component
import React from 'react';
import { Container, Button, Carousel, Row, Col, Card } from 'react-bootstrap';
import CustomNavbar from './Navbar'; // Import the Navbar component

const HomePage = () => {
  return (
    <Container>
      
      {/* Reusable Navbar */}
      <CustomNavbar />
      {/* Landing Page Section */}
      <div style={{ background: '#f8f9fa', padding: '20px', textAlign: 'center' }}>
        <h1>HAIR GOALS</h1>
        <p>
        Doing your hair can be challenging. Let's help you make it easier.
        </p>
        <p>
          <Button variant="primary">Our Mission</Button>
        </p>
      </div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://mielleorganics.com/cdn/shop/articles/FOQTA_blog_1000x.png?v=1695850282" // Replace with your image URL
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Mielle</h3>
            <p>Keep your box braids looking fresh with Mielle</p>
          </Carousel.Caption>
        </Carousel.Item>


        {/* Add more Carousel.Items as needed */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i0.wp.com/evenaturally.com/wp-content/uploads/2020/06/The-Mane-Choice.jpeg?fit=1080%2C720&ssl=1" // Replace with your image URL
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>The Mane Choice</h3>
            <p>Be ready for anything</p>
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
      <Row>
        {/* Product 1 */}
        <Col md={4}>
          <Card className="product-card">
            <Card.Img variant="top" src="https://assets.wakefern.com/is/image/wakefern/38151918864-065?$Mi9Product_detail$" />
            <Card.Body>
              <Card.Title>Aussie Miracle Coils</Card.Title>
              <Card.Text>
              Nourishing Oil
              </Card.Text>
              <Button variant="primary">Shop</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Product 2 */}
        <Col md={4}>
          <Card className="product-card">
            <Card.Img variant="top" src="https://i5.walmartimages.com/asr/0c20e1e8-838e-42e4-94a0-dd1e3148dab8.6f0080a5a8dc22263a88cfcf6f472d44.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF" />
            <Card.Body>
              <Card.Title>Mielle</Card.Title>
              <Card.Text>
                Rosemary mint scalp & hair strengthening oil
              </Card.Text>
              <Button variant="primary">Shop</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Add more products as needed */}
        {/* Product 2 */}
        <Col md={4}>
          <Card className="product-card">
            <Card.Img variant="top" src="https://m.media-amazon.com/images/I/81z56yYQDzL.jpg" />
            <Card.Body>
              <Card.Title>Cantu</Card.Title>
              <Card.Text>
                Coconut Curling Cream
              </Card.Text>
              <Button variant="primary">Shop</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      
      {/* Slideshow Section */}
      {/* Top Hairstyles Section */}
      <Col md={12} className="text-center">
        <h2 className="mt-4">Popular Hairstyles</h2>
      </Col>
      <Carousel className="mt-4">
        <Carousel.Item>
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
          <Carousel.Caption>
            {/* <h3>Slide 2</h3>
            <p>Description for slide 2.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>

  );
}

export default HomePage;
