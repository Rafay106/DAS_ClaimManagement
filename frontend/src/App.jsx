import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header";
import ClaimPage from "./pages/ClaimPage";
import FileClaim from "./pages/FileClaim";
import HomePage from "./pages/HomePage";
import ProcessClaims from "./pages/ProcessClaims";
import ReportPage from "./pages/ReportPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        {/* <Container className="my-2"> */}
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/claim/:claimId" element={<ClaimPage />} />
          <Route path="/claim/create" element={<FileClaim />} />
          <Route path="/claim/process" element={<ProcessClaims />} />
          <Route path="/report" element={<ReportPage />} />
        </Routes>
        {/* </Container> */}
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
