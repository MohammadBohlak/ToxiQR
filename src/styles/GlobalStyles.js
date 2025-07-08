import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    font-family: 'Lato', sans-serif !important;
    font-size: 10px;
  }
  body{

    font-family: 'Lato', sans-serif !important;
    padding-top: var(--height-nav);
  }
 
  :root{
    --p-container: 60px ;
    @media screen and (max-width: 567px) {
      --p-container:30px;
    }
    @media screen and (max-width: 400px) {
      --p-container:5px;
    }
    --height-nav:   75px ;
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
      
    }
  }
`;
