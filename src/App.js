import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserStore from "./context/UserStore";
import Login from "./pages/signup/Login";
import Signup from "./pages/signup/SignUp";
import Home from "./pages/board/Home";
import DetailMember from "./pages/board/DetailMember";
import Home1 from "./pages/Home";
import Layout from "./pages/Layout";
import ChatList from "./pages/chatting/ChatList";
import ChatRoomCreate from "./pages/chatting/ChatRoomCreate";
import Chatting from "./pages/chatting/Chatting";
function App() {
  return (
    <>
      <GlobalStyle />
      <UserStore>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route element={<Layout />}>
              <Route path="/home" element={<Home1 />} />
              <Route path="/chat" element={<ChatList />} />
              <Route path="/chat-create" element={<ChatRoomCreate />} />
              <Route path="/chatting/:roomId" element={<Chatting />} />
            </Route>
            <Route path="/home/list/:email" element={<DetailMember />} />
            <Route path="/home1" element={<Home />} />
          </Routes>
        </Router>
      </UserStore>
    </>
  );
}

export default App;
