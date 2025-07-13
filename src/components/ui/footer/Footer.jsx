// Footer.jsx
import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import logoImg from "../../../assets/images/logo.png";
import googlePlayImg from "../../../assets/images/google-play.png";
import appStoreImg from "../../../assets/images/app-store.png";
import MyContainer from "../myContainer/MyContainer";
import { StyledSection } from "../../common/sections";
import { SmallText, Text } from "../../common/texts";

const Logo = styled.img`
  max-width: 150px;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  li {
    margin-bottom: 0.5rem;
  }
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  transition: color 0.3s;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
const SocialIcon = styled.a`
  color: ${(props) => props.color};
  font-size: 35px;
  margin-right: 1rem;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:last-child {
    margin-right: 0;
  }
`;

const DownloadBtn = styled.a`
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 140px;
    height: auto;
    display: block;
  }
`;

const BottomBar = styled.div`
  border-top: 1px solid #ccc;
  text-align: center;
  padding: 1rem 0;
  background-color: #666666;
  color: #fff;
`;
const StyledFooter = styled.section`
  padding: var(--m-top) 0 0 0;
  .icons {
    /* justify-content: space-between; */
  }
  .buttons {
    justify-content: end;
  }
  .row {
    @media (max-width: 768px) {
      gap: 10px;
      * {
        text-align: center !important;
      }
    }
  }
  .row > div {
    @media (max-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: center;
      .icons {
        justify-content: center !important;
      }
      .buttons {
        justify-content: center;
      }
    }
  }
`;
const Footer = () => (
  <StyledFooter style={{ background: "#eee" }}>
    <MyContainer>
      <Row className="m-0 p-5 justify-content-between">
        <Col sm={12} md={4} lg={2}>
          <Logo src={logoImg} alt="Logo" />
        </Col>
        {/* Column 1: Logo */}
        <Col sm={12} md={4} lg={2} className="d-flex align-items-center">
          <NavList>
            <li>
              <Text>
                <FooterLink to="/about">About</FooterLink>
              </Text>
            </li>
            <li>
              <Text>
                <FooterLink to="/terms">Terms of Use</FooterLink>
              </Text>
            </li>
            <li>
              <Text>
                <FooterLink to="/fues">Fues</FooterLink>
              </Text>
            </li>
            <li>
              <Text>
                <FooterLink to="/privacy">Privacy</FooterLink>
              </Text>
            </li>
          </NavList>
        </Col>

        {/* Column 2: Links */}
        <Col sm={12} md={4} lg={2}>
          <NavList>
            <li>
              <Text>
                <FooterLink to="/press">Press</FooterLink>
              </Text>
            </li>
            <li>
              <Text>
                <FooterLink to="/blog">Our blog</FooterLink>
              </Text>
            </li>
            <li>
              <Text>
                <FooterLink to="/instructions">Instructions</FooterLink>
              </Text>
            </li>
          </NavList>
        </Col>

        {/* Column 3: Social Icons */}
        <Col sm={12} md={4} lg={2} className="icons d-flex align-items-center">
          <SocialIcon
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", background: "#3b5998" }}
          >
            <FaFacebookF />
          </SocialIcon>
          <SocialIcon
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", background: "#1da1f2" }}
          >
            <FaTwitter />
          </SocialIcon>
          <SocialIcon
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "white",
              background:
                "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
            }}
          >
            <FaInstagram />
          </SocialIcon>
        </Col>

        <Col
          sm={12}
          md={4}
          lg={4}
          className="buttons d-flex align-items-center gap-4"
        >
          <DownloadBtn
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={googlePlayImg} alt="Get it on Google Play" />
          </DownloadBtn>
          <DownloadBtn
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={appStoreImg} alt="Download on the App Store" />
          </DownloadBtn>
        </Col>
      </Row>
    </MyContainer>

    <BottomBar>
      <SmallText $align="center" className="text-white">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </SmallText>
    </BottomBar>
  </StyledFooter>
);

export default Footer;
