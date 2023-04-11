import styled from 'styled-components';

export const StatTitle = styled.h2`
text-align: center;
text-transform: uppercase;`

export const StatList = styled.ul`

display:flex;
width: inherit;
justify-content: space-evenly;

padding:0;
margin:0;`

export const StatItem = styled.li`
list-style-type: none;

display: flex;
flex-direction: column;
align-items: center;

padding: 10px;
width: inherit;` 

export const StatLabel = styled.span`
font-weight: 400;
font-size: 15px;
color:white;

margin-bottom: 5px;`

export const StatPercentage = styled.span`

font-weight: 400;
font-size: 20px;
color:white;`

export const Container = styled.section`

border: 1px solid grey;
width: 400px;
margin:20px auto 20px;`

