import PropTypes from 'prop-types';
import { StatTitle, StatList, StatItem, StatLabel, StatPercentage, Container } from './Statistics.styled';


const createColor = () => {
    const color =
      'rgba(' +
      Math.round(Math.random() * 255) +
      ',' +
      Math.round(Math.random() * 255) +
      ',' +
      Math.round(Math.random() * 255) +
      ',' +
      0.5 +
      ')';
  
    return color;
  };


export const Statistics = ({stats, title}) =>{
return (

<Container>


  {title && <StatTitle>{title}</StatTitle>}

  <StatList>
      {stats.map(({id, label, percentage}) => (
        <StatItem key={id} style={{backgroundColor:createColor()}}>
            <StatLabel>{label}</StatLabel>
            <StatPercentage>{percentage}%</StatPercentage>
        </StatItem>
      ))}
    </StatList>

</Container>)}    


Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

 


