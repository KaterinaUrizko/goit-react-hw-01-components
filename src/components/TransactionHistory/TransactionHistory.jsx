import PropTypes from 'prop-types';
import { Table, TableHeaderRaw, TableBodyRaw, TableData, TableHeader, TableBody, TableHeaderData } from './TransactionHistory.styled';

export const TransactionHistory  = ({items})=> {
    return (

<Table>
    <TableHeader>
        <TableHeaderRaw>
        <TableHeaderData>Type</TableHeaderData>
        <TableHeaderData>Amount</TableHeaderData> 
        <TableHeaderData>Currency</TableHeaderData>
        </TableHeaderRaw>
    </TableHeader>

    <TableBody>

        {items.map(({id,type, amount, currency})=>(

            <TableBodyRaw key={id}>
            <TableData>{type.replace(type[0], type[0].toUpperCase())}</TableData>
            <TableData>{amount}</TableData>
            <TableData>{currency}</TableData>
            </TableBodyRaw>
        ))}
    
    </TableBody>
</Table>

    )
}


TransactionHistory.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }