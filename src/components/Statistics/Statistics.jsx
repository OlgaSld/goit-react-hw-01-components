import { getRandomHexColor } from 'getRandomColor';
import PropTypes from 'prop-types'
import {
  StatList,
  Statictics,
  StatItem,
  Label,
  Title,
  Percentage,
} from './Statistics_styled';

export const Statistics = ({ stats  }) => {
  return (
    <Statictics>
      <Title>Upload stats</Title>

      <StatList>
        {stats.map(stat => (
          <StatItem key={stat.id} style={{backgroundColor: getRandomHexColor()}}>
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </StatItem>
        ))}
      </StatList>
    </Statictics>
  );
};


Statictics.propTypes = {
  stats: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired
  }).isRequired,
}