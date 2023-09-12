import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Container } from "react-bootstrap";

import Header from "./components/Header";
import ClaimCreate from "./pages/ClaimCreate";
import HomePage from "./pages/HomePage";
import ApproveClaims from "./pages/ApproveClaims";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Container className="my-2">
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/claim/create" element={<ClaimCreate />} />
            <Route path="/claim/approve" element={<ApproveClaims />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
