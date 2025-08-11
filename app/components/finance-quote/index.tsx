

export interface FinanceQuoteProps {
  onTheRoadPrice: number; // The Vehicle price.
  totalDeposit: number; // The provided Deposit amount.
  totalAmountOfCredit: number; // Subtract the Deposit from the Vehicle Price.
  numberOfMonthlyPayments: number; // The provided term.
  monthlyPayment: number; // The total amount of credit divided by the term.
}

const FinanceQuote = (props: FinanceQuoteProps) => {
  const { onTheRoadPrice, totalDeposit, totalAmountOfCredit, numberOfMonthlyPayments, monthlyPayment } = props;

  return (
    <div className="vehicle-container">
      <h2>Finance Quote</h2>
      <p>Total Deposit: {totalDeposit}</p>
      <p>Total Amount of Credit: {totalAmountOfCredit}</p>
      <p>Number of Monthly Payments: {numberOfMonthlyPayments}</p>
      <p>Monthly Payment: {monthlyPayment}</p>
    </div>
  );
};

export default FinanceQuote;
