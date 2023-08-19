import { TransacHistory } from "./TransactionHistory_styled";
import PropTypes from 'prop-types';


export const TransactionHistory = ({ items }) => {
  return (
    <TransacHistory>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
        <tr key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
        </tr>
              
        ))}
      </tbody>
    </TransacHistory>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  }),
}
