import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserStore from "./context/UserStore";
import Login from "./pages/signup/Login";
import Signup from "./pages/signup/SignUp";
import Home from "./pages/board/Home";
import DetailMember from "./pages/board/DetailMember";
import Home1 from "./pages/Home";
function App() {
  return (
    <>
      <GlobalStyle />
      <UserStore>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/home/list/:email" element={<DetailMember />} />
            <Route path="/home1" element={<Home1 />} />
          </Routes>
        </Router>
      </UserStore>
    </>
  );
}

export default App;
