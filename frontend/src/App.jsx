import Layout from "./components/Layout";
import Home from "./pages/Home";
import FileClaim from "./pages/FileClaim";
import ProcessClaim from "./pages/ProcessClaim";
import RequireAuth from "./components/RequireAuth";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Protected Routes */}
        <Route element={<RequireAuth />}>
          <Route index element={<Home />} />
          <Route path="fileclaim" element={<FileClaim />} />
          <Route path="processclaim" element={<ProcessClaim />} />
        </Route>

        {/* Catch all other Routes */}
        <Route path="*" element={<h1>404</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
