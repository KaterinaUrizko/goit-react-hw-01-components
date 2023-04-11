import styled from 'styled-components';

export const Table = styled.table`

margin-top: 30px;
margin:auto;
width: 500px;
border-collapse: collapse;
border: 2px solid #C8C8C8;
box-shadow: 0 0 10px #c6cccced;
`
export const TableHeader = styled.thead``

export const TableHeaderData = styled.th`

font-weight: 400;
font-size: 18px;
color: #FFFFFF;
border: 1px solid #BEBEBE;
padding: 5px 10px;`

export const TableHeaderRaw = styled.tr`

margin-bottom: 5px;
padding: 10px;
background-color: #86C5D8;`

export const TableBodyRaw = styled.tr`

:nth-of-type(odd) {
    background-color: #efefef;
  };
  :hover {
    background-color: lightpink;`

export const TableBody = styled.tbody``

export const TableData = styled.td`

font-weight: 300;
font-size: 15px;
color: #524a4d;
text-align: center;

border: 1px solid rgb(190, 190, 190);
padding: 5px 10px;
width: inherit;

:first-of-type {
    text-align: left;
    padding-left: 30px;
};`