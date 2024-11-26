import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserStore from "./context/UserStore";
function App() {
  return (
    <>
      <GlobalStyle />
      <UserStore>
        <Router>
          <Routes></Routes>
        </Router>
      </UserStore>
    </>
  );
}

export default App;
