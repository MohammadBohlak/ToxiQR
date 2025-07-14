import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Logo = styled.img`
  max-width: 150px;
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  li {
    margin-bottom: 0.5rem;
  }
`;

export const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  transition: color 0.3s;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Icons = styled(Col)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 0; */
  column-gap: 10px;
  @media (max-width: 768px) {
    column-gap: 15px;
  }
`;
export const SocialIcon = styled.a`
  @media (max-width: 1200px) {
    height: 40px;
    width: 40px;
    font-size: 28px;
  }
  color: ${(props) => props.color};
  font-size: 35px;
  /* margin-right: ${({ theme }) => (theme.lang == "en" ? "10px" : "auto")}; */
  /* margin-left: ${({ theme }) => (theme.lang == "ar" ? "10px" : "auto")}; */
  border-radius: 50%;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    transform: translateY(-10px);
  }
`;

export const DownloadButtons = styled(Col)`
  display: flex;
  gap: 30px;
  justify-content: end;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;
export const DownloadBtn = styled.a`
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 140px;
    height: auto;
    display: block;
  }
  @media (max-width: 1200px) {
    img {
      max-width: 120px;
    }
  }
  @media (max-width: 400px) {
    img {
      max-width: 100px;
    }
  }
`;

export const BottomBar = styled.div`
  border-top: 1px solid #ccc;
  text-align: center;
  padding: 1rem 0;
  background-color: #666666;
  color: #fff;
`;
export const StyledFooter = styled.section`
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
