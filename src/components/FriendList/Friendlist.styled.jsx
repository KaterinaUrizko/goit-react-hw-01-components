import styled from "styled-components";

export const List=styled.ul`

display: flex;
flex-direction: column;
width: 400px;
margin:20px auto 20px;
padding:0;`

export const FriendItem = styled.li`
display: flex;
align-items: center;
box-shadow: 0 0 10px #c6cccced;
padding: 20px;
margin-bottom: 5px;
list-style-type: none;`

export const Status = styled.span`

width: 20px;
height: 20px;
border-radius: 50%;
margin-right: 20px;
background-color: ${props=> {return(props.isOnline?'green':'red')}}`

export const Image = styled.img`

width: 70px;
margin-right: 20px;`

export const Name = styled.p`
font-weight: 600;
font-size: 30px;
margin-bottom: 15px;
color: grey;`
