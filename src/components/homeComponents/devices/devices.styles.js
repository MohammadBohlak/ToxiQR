import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

export const StyledDevices = styled(Row)`
  min-height: 300px;
  > div {
    padding: 50px 20px 20px 20px;
  }
  @media (max-width: 768px) {
    * {
      text-align: center;
    }
  }
`;
export const LeftDevices = styled(Col)`
  background-color: white;
  padding-left: var(--p-container) !important;
  a {
    width: 160px;
    img {
      max-width: 100%;
    }
  }
  @media (max-width: 768px) {
    .buttons {
      justify-content: center;
    }
  }
  @media (max-width: 992px) {
    a {
      width: 140px;
    }
  }
`;
export const RightDevices = styled(Col)`
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  .d {
    background-color: ${({ theme }) => theme.colors.primary};
    img {
    }
  }
  .d1 {
    max-width: 10%;
  }
  .d4,
  .d3 {
    max-width: 40%;
    width: 40%;
  }
`;
