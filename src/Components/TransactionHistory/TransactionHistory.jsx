const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>

        {items.map(itm => {
          return (
            <tr key={itm.id}>
              <td>{itm.type}</td>
              <td>{itm.amount}</td>
              <td>{itm.currency}</td>
            </tr>
          );
        })}

      </tbody>
    </table>
  );
};

export default TransactionHistory;
