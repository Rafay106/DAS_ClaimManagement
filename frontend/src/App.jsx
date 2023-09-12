import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import NavBar from "./components/NavBar";
import ClaimCreate from "./pages/ClaimCreate";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/claim/create" element={<ClaimCreate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
