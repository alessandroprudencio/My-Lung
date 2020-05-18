import styled, { css, keyframes } from 'styled-components'


export const dragActive = css`
    border-color:#78e5d5;
`

export const dragReject = css`
    border-color:#e77878;
`

export const Title = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    padding:65px;
    color:#27a6e2;
    font-size:20px;
    margin:0 auto;
`

const animateCard = keyframes`
  from {
        margin-right: 100%;
        opacity:0.5
    }
    to {
        margin-left: 0%;
        opacity:1
    }
`;

export const ScrollDetails = styled.span`
    overflow-x:visible;
`

export const PhotoArea = styled.div`
    display:flex;
    flex-direction:column;
    background-color:#fff;
    border-radius:11px;
    box-shadow:0px 0px 20px 25px rgba(0, 0, 0, 0.1);
    min-height:70%;
    max-width:50%;
    width:100%;
    text-align:center;
    align-items:center;
    -webkit-animation: ${animateCard} 1s ease;
    -webkit-animation-fill-mode:both;
    animation: ${animateCard} 1s ease;
    animation-fill-mode:both;

    @media screen and (max-width: 600px) {
        max-width:88%;
        overflow-y:hidden;
        min-height:65%;
        margin-bottom:25%;
    }

    button{
        font-size:13px;
        border-radius:40px;
        margin-left:15px;
        border:1px solid #ccc;
        padding:7px;
        margin:5px;
        margin-top:10px;
        background-color:transparent;
        color:#333;
        cursor: pointer;
        outline:none;

        &:hover{
            background-color:#2BA7E2;
            color:white;
            box-shadow:1px 1px 1px 1px #999;
        }
    }
`

export const ContainerDrag = styled.div`
    text-align:center;
    justify-content:center;
    max-width:50%;
    @media screen and (max-width: 600px) {
        max-width:75%;
    }
    align-content:center;
`

export const DropContainer = styled.div.attrs({ className: 'dropzone' })`
    border:3px dashed #ddd;
    border-radius:4px;
    cursor: pointer;
    margin:0 auto;
    transition: height 0.1s ease;
    outline:none;
    width:80%;
    padding:20px;
    ${props => props.isDragActive && dragActive}
    ${props => props.isDragReject && dragReject}
`

export const UploadMessage = styled.p`
    ${props => props.type === 'error' && { color: '#e77878' }};
    ${props => props.type === 'success' && { color: '#78e5d5' }};
    ${props => (props.type !== 'success' && props.type !== 'error') && { color: '#999' }};
   color: '#666';
`

export const FileInfo = styled.div`
    justify-content:space-between;
    color:black;
    margin-top:16px;
    div{
        p{
            ${props => props.result === 'Pneumonia' ? { color: "red" } : { color: "green" }};
            font-size:26px;

            span{
                font-size:20px;
                color:black;
            }
        }
    }  
`

export const MessageLoading = styled.p`
font-size:12px;
color:#333;
font-weight:bold;
margin-top:10px;
text-align:center;
`

const animateImage = keyframes`
  from {
       margin-left:0%;
    }
    to {
        margin-left: -75%;

    }
`;
const animateImagePhone = keyframes`
  from {
       margin-left:0%;
    }
    to {
        margin-left: -120%;

    }
`;

const returnAnimateImage = keyframes`
  from {
        margin-left: -56%;
    }
    to {
        padding:0 auto;
    }
`;

const returnAnimateImagePhone = keyframes`
  from {
        margin-left: -56%;
    }
    to {
        padding:0 auto;
    }
`;


export const ImageSelected = styled.div`
    background-image: url(${props => props.image.preview});
    cursor: pointer;
    width:250px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius:4px;
    height:180px;
    ${props => props.clickImage === true && css`animation:${animateImage} 1s ease forwards;`};
    ${props => props.clickImage === false && css`animation:${returnAnimateImage} 1s ease forwards;`};
    ${props => props.clickImage === null && css`animation:'';`};

    @media screen and (max-width: 600px) {
        ${props => props.clickImage === true && css`animation:${animateImagePhone} 1s linear forwards;display:block`};
        ${props => props.clickImage === false && css`animation:${returnAnimateImagePhone} 1s linear forwards;display:block`};
    }
`

const animateDetails = keyframes`
  from {
        margin-left: 130%;
        opacity:0.5
    }
    to {
        margin-left: 110%;
        opacity:1
    }
`;




const hideDetails = keyframes`
  0% {
        margin-left: 110%;
        opacity:0.9
    }
    50%{
        opacity:0.2
    }
    75%{
        opacity:0.1
    }
    100% {
        margin-left: 160%;
        position:fixed;
        opacity:0;
        display:none;
    }
`;

const hideDetailsPhone = keyframes`
  0% {
        margin-left: 80%;
        opacity:1
    }
    50%{
        opacity:0.2
    }
    75%{
        opacity:0.1
    }
    100% {
        margin-left: 160%;
        position:fixed;
        opacity:0;
        display:none;
    }
`;



export const Details = styled.div`
    width: 350px;
    border-radius:4px;
    font-style:italic;
    height: 180px;
    margin-left:105%;
    background-color:#f7f4f4;
    color: #2b2a2a;
    ${props => props.clickImage === true && css`animation:${animateDetails} 1s linear forwards;display:block`};
    ${props => props.clickImage === false && css`animation:${hideDetails} 1s linear forwards;display:block`};
    ${props => props.clickImage === null && css`display:none`};

    @media screen and (max-width: 600px) {
        width:120%;
        ${props => props.clickImage === true && css`animation:${animateDetails} 1s linear forwards;display:block`};
        ${props => props.clickImage === false && css`animation:${hideDetailsPhone} 1s linear forwards;display:block`};
        ${props => props.clickImage === null && css`display:none`};
    }
    p{
        font-size: 13.5px;
        text-align: left;
        padding: 10px;
        line-height: 21px;
        margin:0 auto;
        @media screen and (max-width: 600px) {
            line-height: 16px;
        }
    }
`