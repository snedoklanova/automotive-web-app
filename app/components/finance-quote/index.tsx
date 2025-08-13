import { useEffect, useState } from "react";

export interface FinanceQuoteProps {
  onTheRoadPrice: number; // The Vehicle price.
  totalDeposit: number; // The provided Deposit amount.
  totalAmountOfCredit: number; // Subtract the Deposit from the Vehicle Price.
  numberOfMonthlyPayments: number; // The provided term.
  monthlyPayment: number; // The total amount of credit divided by the term.
}

export const FinanceQuote = (props: FinanceQuoteProps) => {
  const { onTheRoadPrice, totalDeposit, totalAmountOfCredit, numberOfMonthlyPayments, monthlyPayment } = props;
  const [termOption, setTermOption] = useState(numberOfMonthlyPayments);
  const [monthlyPay, setMonthlyPay] = useState(monthlyPayment);

  const selectOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTermOption(Number(event.target.value));
  };

  useEffect(() => {
    switch (termOption) {
      case 12:
        setMonthlyPay(totalAmountOfCredit / 12);
        break;
      case 24:
        setMonthlyPay(totalAmountOfCredit / 24);
        break;
      case 36:
        setMonthlyPay(totalAmountOfCredit / 36);
        break;
      case 48:
        setMonthlyPay(totalAmountOfCredit / 48);
        break;
      case 60:
        setMonthlyPay(totalAmountOfCredit / 60);
        break;
    }

  }, [termOption]);

  return (
    <div
      className="m-4 p-6 bg-gray-100 rounded-md"
      data-testid="finance-quote-container"
    >
      <form>
        <h2 className="text-lg font-bold text-gray-900 mb-4">Finance Quote</h2>
        <p className="text-gray-900">On The Road Price: £{onTheRoadPrice}</p>
        <p className="text-gray-900">Total Deposit: £{totalDeposit} (10%)</p>
        <p className="text-gray-900">Total Amount of Credit: £{totalAmountOfCredit}</p>
        <p className="text-gray-900">Term:</p>
        <select
          name="term"
          id="term-select"
          className="border-2 border-gray-300 rounded-md mb-6 p-2 w-3xs text-gray-900"
          onChange={selectOnChange}
          value={termOption}
          aria-label="Change term"
        >
          <option value={60}>60</option>
          <option value={48}>48</option>
          <option value={36}>36</option>
          <option value={24}>24</option>
          <option value={12}>12</option>
        </select>
        <p className="text-gray-900">Monthly Payment: £{monthlyPay.toFixed(2)}</p>
      </form>
    </div>
  );
};
