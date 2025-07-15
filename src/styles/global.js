import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --swiper-navigation-color: #61a146;
    --swiper-pagination-color: #61a146;
  }

  * {
    margin: 0;
    padding: 0;
  }

  #root {
    width: 100%;
    height: 100%;
  }
  
  html {
    width: 100%;
    height: 100%;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 10px;
      background-color: ${({ theme }) => theme.colors.fontPrimary};
    }

    &::-webkit-scrollbar-button {
      display: none;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.primary};
      border-radius: 5px;
    }
  }

  body {
    font-family: "Verdana", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.font};
    background-color: ${({ theme }) => theme.colors.bg};
    width: 100%;
    height: 100%;
  }

  li {
    list-style-type: none;
  }
  
  img{
    user-select: none;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  }

  a {
    text-decoration: none;
  }

  h1 {
    font-size: 28px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.font};
    width: 100%;
    text-align: left;
    margin-bottom: 16px;
  }

  h2 {
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.font};
    margin-bottom: 12px;
  }

  h3 {
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.font};
    margin-bottom: 8px;
  }
`;
