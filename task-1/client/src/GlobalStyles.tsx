import { Global, css } from '@emotion/react';

function GlobalStyles() {
    return (
        <Global
            styles={css`
                * {
                    padding: 0px;
                    margin: 0px;
                    border: none;
                }

                *,
                *::before,
                *::after {
                    box-sizing: border-box;
                }

                /* Links */

                a,
                a:link,
                a:visited {
                    text-decoration: none;
                }

                a:hover {
                    text-decoration: none;
                }

                /* Common */

                aside,
                nav,
                footer,
                header,
                section,
                main {
                    display: block;
                }

                h1,
                h2,
                h3,
                h4,
                h5,
                h6,
                p {
                    font-size: inherit;
                    font-weight: inherit;
                }

                ul,
                ul li {
                    list-style: none;
                }

                img {
                    vertical-align: top;
                }

                img,
                svg {
                    max-width: 100%;
                    height: auto;
                }

                address {
                    font-style: normal;
                }

                /* Form */

                input,
                textarea,
                button,
                select {
                    font-family: inherit;
                    font-size: inherit;
                    color: inherit;
                    background-color: transparent;
                }

                input::-ms-clear {
                    display: none;
                }

                button,
                input[type='submit'] {
                    display: inline-block;
                    box-shadow: none;
                    background-color: transparent;
                    background: none;
                    cursor: pointer;
                }

                input:focus,
                input:active,
                button:focus,
                button:active {
                    outline: none;
                }

                button::-moz-focus-inner {
                    padding: 0;
                    border: 0;
                }

                label {
                    cursor: pointer;
                }

                legend {
                    display: block;
                }

                input[type='file'] {
                    max-width: 100%;
                }
                html {
                    font-family: 'Nunito Sans', sans-serif;
                    font-optical-sizing: auto;
                    font-weight: normal;
                    font-style: normal;
                    font-variation-settings:
                        'wdth' 100,
                        'YTLC' 500;
                }
            `}
        />
    );
}

export default GlobalStyles;
