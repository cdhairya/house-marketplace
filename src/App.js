import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from "./components/pages/Explore";
import Offers from "./components/pages/Offers";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import ForgotPassword from "./components/pages/ForgotPassword";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/profile" element={<SignIn />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
      {/* Navbar */}
    </>
  );
}

export default App;
