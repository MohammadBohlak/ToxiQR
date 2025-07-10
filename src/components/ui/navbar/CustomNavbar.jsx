import React, { useState, useRef, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import MyContainer from "../myContainer/MyContainer";
import LangSwitch from "../../langSwitch/LangSwitch";
import { StyledNavbar, StyledNavLink } from "./navbar.styles";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import logo from "../../../assets/images/logo.png";

const Logo = styled.div`
  width: 100px;
  img {
    max-width: 100%;
  }
`;

const CustomNavbar = () => {
  // حالة للتحكم بفتح وإغلاق القائمة
  const [expanded, setExpanded] = useState(false);
  // مرجع لتحديد المنطقة الخاصة بالنافبار
  const navRef = useRef(null);
  // للحصول على التغييرات في مسار التنقل (بذلك يتم إغلاق القائمة عند النقر على أحد الروابط)
  const location = useLocation();

  const { t } = useTranslation();

  // دالة لإغلاق القائمة عند النقر خارجها
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // إغلاق القائمة عند تغيير المسار (أي عند النقر على رابط)
  useEffect(() => {
    setExpanded(false);
  }, [location]);

  return (
    <div ref={navRef}>
      <StyledNavbar expand="md" expanded={expanded}>
        <MyContainer>
          <Navbar.Brand as={NavLink} to="/">
            <Logo>
              <img src={logo} alt="logo" />
            </Logo>
          </Navbar.Brand>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <StyledNavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {t("navbar.instructions")}
              </StyledNavLink>
              <StyledNavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {t("navbar.ourBlog")}
              </StyledNavLink>
              <StyledNavLink
                to="/press"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {t("navbar.press")}
              </StyledNavLink>
              {/* <StyledNavLink
                to="/detection"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Detection
              </StyledNavLink> */}
            </Nav>
          </Navbar.Collapse>
          <div
            className="nav-buttons"
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <JoinBtn>{t("navbar.join")}</JoinBtn>
            <LangSwitch />
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={() => setExpanded(expanded ? false : true)}
            />
          </div>
        </MyContainer>
      </StyledNavbar>
    </div>
  );
};
const JoinBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  border: 2px solid transparent;
  color: #fff;
  height: 35px;
  width: 100px;
  font-weight: bold;
  border-radius: 10px;
  font-size: var(--min-text);
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: #eee;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export default CustomNavbar;
