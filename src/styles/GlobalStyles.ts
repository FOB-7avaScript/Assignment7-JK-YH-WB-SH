import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    @font-face {
    font-family: 'NanumSquareRound';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumSquareRound.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    }
    body{
        font-family: 'NanumSquareRound', sans-serif;

        &::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera*/
        }
    }
    ol, ul, li {
        list-style: none;
    }
    button{
        border:none;
        background-color: transparent;
    }
`;

export default GlobalStyles;
