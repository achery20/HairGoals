// import logo from './logo.svg';
import './App.css';
import Signup from "./components/Signup";
import { Container } from "react-bootstrap"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./components/HomePage";

function App() {
  return (
   
    <Container
      className = "d-flex align-items-center justify-content-center"
      style = {{ minHeight: "100vh"}}
      >
        <div className = "w-100" style = {{ maxWidth: "100%" }}>
          <Router>
            <AuthProvider>
              <Routes>
                <Route path="/signup" element={<Signup/>} />
                <Route exact path="/" element={<HomePage/>} />
              </Routes>
            </AuthProvider>
          </Router> 
          {/* <Signup /> */}
        </div>
    </Container>
  
  );
}

export default App
