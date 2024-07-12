const TransactionHistory = (item) => {
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

            {item.map(itm => {
                return (
                    <tr>
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
