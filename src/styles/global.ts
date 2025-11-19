// Dependencies
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    background-color: #eceeee;
    min-width: 360px;
    scrollbar-width: thin;
    scrollbar-color: #ebebeb transparent;
  }

  html { scroll-behavior: smooth;  }

  body, div {
    -webkit-font-smoothing: antialiased;
  }

  *, body, input, button, textarea, span, h1, h2, h3, h4, h5, h6 {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
  }

  *:focus {
    outline: 0;
  }

  img {
    user-select: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  .swiper-button-next,
  .swiper-button-prev {
    user-select: none !important;
    -webkit-user-select: none !important;
    -moz-user-select: none !important;
    -ms-user-select: none !important;
    -webkit-touch-callout: none !important;
    -webkit-tap-highlight-color: transparent !important;
    pointer-events: auto !important;
  }

  .swiper-button-next *,
  .swiper-button-prev * {
    user-select: none !important;
    -webkit-user-select: none !important;
    -moz-user-select: none !important;
    -ms-user-select: none !important;
    pointer-events: none !important;
  }

  .swiper-button-next:active,
  .swiper-button-prev:active,
  .swiper-button-next:focus,
  .swiper-button-prev:focus {
    user-select: none !important;
    -webkit-user-select: none !important;
    -moz-user-select: none !important;
    -ms-user-select: none !important;
  }
`;
