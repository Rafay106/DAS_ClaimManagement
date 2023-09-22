import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header";
import FileClaim from "./pages/FileClaim";
import HomePage from "./pages/HomePage";
import ApproveClaims from "./pages/ApproveClaims";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        {/* <Container className="my-2"> */}
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/claim/create" element={<FileClaim />} />
            <Route path="/claim/approve" element={<ApproveClaims />} />
          </Routes>
        {/* </Container> */}
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
