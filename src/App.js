// import logo from './logo.svg';
import Signup from "./components/Signup";
import { Container } from "react-bootstrap"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./components/HomePage";
import PanteneProduct from './components/PanteneProduct';
import MielleProduct from './components/MielleProduct';
import CarolsDaughterProduct from './components/CarolsDaughterProduct'
import './App.css';
//import ProductReviews from './components/ProductReviews'
function App() {
  return (
    <div className="App">
      <Container
        className = "d-flex align-items-center justify-content-center"
        style = {{  width: "100%"}}
        >
          <div className = "w-100" style = {{ maxWidth: "100%" }}>
            <Router>
              <AuthProvider>
                <Routes>
                  <Route path="/signup" element={<Signup/>} />
                  <Route exact path="/" element={<HomePage/>} />
                  <Route path="/panteneshampoo" element={<PanteneProduct/>} />
                  <Route path="/mielleoil" element={<MielleProduct/>} />
                  <Route path="/carolsdaughtermoisturizer" element={<CarolsDaughterProduct/>} />
                </Routes>
              </AuthProvider>
            </Router> 
          </div> 
      </Container>
      </div>
  );
}

export default App
