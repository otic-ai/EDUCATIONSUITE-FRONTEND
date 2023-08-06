import "./App.css";
import Pricing from "./pages/Pricing/Pricing";
import Admindashboard from "./pages/admindashboard/Admindashboard";
import Landingpage from "./pages/landingpage/Landingpage.jsx";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Admin" element={<Admindashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
