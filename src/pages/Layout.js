import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserStore";
import { useNavigate, Outlet } from "react-router-dom";
import {
  Container,
  UserContainer,
  UserImage,
  UserAndName,
  StyledSideMenu,
  StyledMenuList,
  StyledMenuItem,
  MenuIcon,
  StyledLink,
  Dummy,
} from "../styles/LayoutStyle";
import { GiCancel, GiHamburgerMenu } from "react-icons/gi";
import { FiSettings } from "react-icons/fi";
const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Side bar 메뉴 열고 닫기
  const [member, setMember] = useState(""); // 회원 정보 업데이트
  const { color, name, imgUrl } = useContext(UserContext);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const goToSetting = () => {
    navigate("/setting");
  };
  useEffect(() => {}, []);
  return (
    <Container color={color}>
      <header className="head">
        <div onClick={toggleMenu}>
          {isMenuOpen ? (
            <GiCancel size={32} color="white" />
          ) : (
            <GiHamburgerMenu size={32} color="white" />
          )}
        </div>
        <div onClick={goToSetting}>
          <FiSettings size={32} color="white" />
        </div>
      </header>
      <StyledSideMenu isOpen={isMenuOpen} onClick={toggleMenu}></StyledSideMenu>
      <main>
        <Dummy />
      </main>
    </Container>
  );
};

export default Layout;
