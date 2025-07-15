import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    ::selection {
  background: ${({ theme }) => theme.colors.primary}; /* لون خلفية التحديد */
  color: #fff;         /* لون النص داخل التحديد */
}

  }
  html{
    /* font-family: 'Tajawal', sans-serif !important; */
    font-size: 10px;
  }
  body{
    background-color: #fff;
    /* font-family: 'Tajawal', sans-serif !important; */
    padding-top: var(--height-nav);
  }
 
  :root{
    --primary: ${({ theme }) => theme.colors.primary} ; 
    --p-container: 60px ;
    @media screen and (max-width: 567px) {
      --p-container:30px;
    }
    @media screen and (max-width: 400px) {
      --p-container:5px;
    }
    --height-nav:   100px ;
    --m-top : 50px ;
    --big-text: 4.2rem ; 
    --normal-text: 2.4rem; 
    --small-text: 20px; 
    --min-text: 1.6rem; 
    --text:"#000";
    @media (min-width: 769px) and (max-width: 992px){
      --big-text: 2.8rem ; 
      --normal-text: 1.6rem; 
      --small-text: 16px; 
      --min-text: 1.4rem; 
      
    }
    @media (max-width: 768px){
      --big-text: 2.4rem ; 
      --normal-text: 1.8rem; 
      --small-text: 16px; 
      --min-text: 1.2rem; 
     --height-nav: 75px 
    }
  }


  /* 1. تعريف Tajawal */
  @font-face {
    font-family: 'Tajawal';
    src: url('/fonts/Tajawal-Regular.woff2') format('woff2'),
         url('/fonts/Tajawal-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Tajawal';
    src: url('/fonts/Tajawal-Bold.woff2') format('woff2'),
         url('/fonts/Tajawal-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  /* 2. تعريف Lato */
  @font-face {
    font-family: 'Lato';
    src: url('/fonts/Lato-Regular.woff2') format('woff2'),
         url('/fonts/Lato-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Lato';
    src: url('/fonts/Lato-Bold.woff2') format('woff2'),
         url('/fonts/Lato-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  /* 3. اختيار العائلة على أساس لغة الصفحة */
  html[lang="ar"] {
   body{
     font-family: 'Tajawal', sans-serif !important;
   }
  }
  html[lang="en"] {
    body{
    font-family: 'Lato', sans-serif !important;

    }
}
`;
