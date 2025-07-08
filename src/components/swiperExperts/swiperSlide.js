import styled from "styled-components";

export const StyledSwiper = styled.section`
  height: 500px;
  background: #eee;
  padding-top: var(--m-top);
  .swiper {
    direction: ltr;
    width: 100%;
    height: 100%;
    padding-bottom: 60px;
    .swiper-pagination {
      transform: translate(-50%, -20px);
      margin: auto;
    }
    .swiper-pagination .swiper-pagination-bullet {
      background-color: transparent;
      border: 3px solid ${({ theme }) => theme.colors.primary} !important;
      width: 22px;
      height: 22px;
      opacity: 1;
    }
    .swiper-pagination-bullet-active {
      background-color: ${({ theme }) => theme.colors.primary} !important;
    }
  }

  .swiper-slide {
    direction: ${({ theme }) => (theme.lang === "ar" ? "rtl" : "ltr")};
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      flex: 1;
    }
    .right {
      flex: 1;
      display: flex;
      justify-content: end;
    }
    img {
      width: 50%;

      border-radius: 50%;
    }
    @media (max-width: 768px) {
      flex-direction: column-reverse;
      gap: 20px;
      .right {
        justify-content: center;
      }
      .left {
        align-items: center;
        text-align: center;
        span,
        h2 {
          text-align: center;
        }
      }
    }
  }
`;
