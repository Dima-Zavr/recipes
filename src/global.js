import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  :root {
    --swiper-navigation-color: #61a146;
    --swiper-pagination-color: #61a146;
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Verdana", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    color: #000000;
    background-color: #f5f5f5;
    overflow-y: scroll;
  }

  li {
    list-style-type: none;
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
    color: #141c24;
    width: 100%;
    text-align: left;
    margin-bottom: 16px;
  }

  h2 {
    font-size: 24px;
    font-weight: 700;
    color: #141c24;
    margin-bottom: 12px;
  }

  h3 {
    font-size: 20px;
    font-weight: 600;
    color: #292929;
    margin-bottom: 8px;
  }
`
