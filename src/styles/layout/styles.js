import styled, { createGlobalStyle } from 'styled-components'

import 'react-circular-progressbar/dist/styles.css';


export const GlobalStyle = createGlobalStyle`
    body{
        margin:0 auto;
        overflow-y:hidden;
        font-family:Arial, Helvetica, sans-serif
    }
`

export const ContentBox = styled.div`
    display: -webkit-flex;
    display: flex;
    background-color: rgba(0,0,0,.15);
    height: 100%;
    align-items: center;
    color: white;
    justify-content: center;
`
