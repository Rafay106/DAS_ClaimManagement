import FileClaim from "./pages/fileClaim/FileClaim";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import ProcessClaim from "./pages/processclaim/ProcessClaim";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="fileclaim" element={<FileClaim />} />
            <Route path="processclaim" element={<ProcessClaim />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
