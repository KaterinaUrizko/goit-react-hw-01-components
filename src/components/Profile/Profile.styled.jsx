import styled from 'styled-components';

export const  Container = styled.div`
width: 400px;
border: 1px solid grey;
// padding: 20px;
border-radius: 4px;
margin: auto;
text-align:center;

`

export const ProfileInfo = styled.div`
margin-top: 50px;

`

export const Image = styled.img`
width: 200px;
margin: 0 auto;
border-radius: 50%;

box-shadow: 0 0 3px 0px #0000004d;
border-radius: 50%;
background-color: #e7eeeeed;
padding: 20px 10px 0px 10px;
margin-bottom: 15px;
`

export const InfoName = styled.h2`

font-size: 30px;
margin:10px 15px;
color: #524a4d;`

export const InfoTag = styled.p`
font-weight: 500;
font-size: 16px;
color: #524a4d;
margin:10px 15px;
`
export const InfoLocation = styled.p`

font-weight: 700;
font-size: 16px;
color: #524a4d;
margin:10px 15px 50px 15px;
`

export const Stats = styled.ul`

display:flex;
// flex-direction:raw;
width: inherit;
justify-content: space-evenly;
align-item:center;

background-color: #7e6f7449;
// border-bottom-right-radius: 10px;
// border-bottom-left-radius: 10px;
padding: 0px;
margin:auto;
`
export const StatsItem = styled.li` 
margin:0px;
width: 33%;
list-style-type: none;
:non-last-childborder-right: 1px solid grey;

display: flex;
flex-direction: column;
align-items: center;

padding: 7px 0;

:not(:last-child){
    border-right: 1px solid grey;
};

`
export const StatsLabel = styled.span`
text-align: center
font-size: 16px;
font-weight: 500;
`

export const StatsQuantity = styled.span` 
text-align: center 
font-size: 20px;
font-weight: 700;
color: grey;
margin-top:3px;
`

