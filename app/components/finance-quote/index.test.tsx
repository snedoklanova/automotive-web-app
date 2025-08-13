import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import userEvent from '@testing-library/user-event'

import FinanceQuote from ".";
import data from "../../data/vehicles.json";

const financeQuoteData = {
  onTheRoadPrice: data[0].price,
  totalDeposit: data[0].price / 10,
  totalAmountOfCredit: data[0].price - (data[0].price / 10),
  numberOfMonthlyPayments: 60,
  monthlyPayment: (data[0].price - (data[0].price / 10)) / 60,
};

describe("<FinanceQuote />", () => {
  test(" should render correctly", () => {
    render(<FinanceQuote {...financeQuoteData} />);

    expect(screen.getByTestId("finance-quote-container")).toBeInTheDocument();
  });

  test(" should render pay monthly amount correctly when selecting different term", async () => {
    render(<FinanceQuote {...financeQuoteData} />);
    ``
    expect((screen.getByRole('option', { name: '60' }) as HTMLOptionElement).selected).toBeTruthy();
    expect(screen.getByText(/Monthly Payment: £/)).toHaveTextContent(/£351.75/i);

    await userEvent.selectOptions(
      screen.getByRole('combobox'),
      screen.getByRole('option', { name: '12' }),
    );

    expect((screen.getByRole('option', { name: '12' }) as HTMLOptionElement).selected).toBeTruthy();
    expect(screen.getByText(/Monthly Payment: £/)).toHaveTextContent(/£1758.75/i);

    await userEvent.selectOptions(
      screen.getByRole('combobox'),
      screen.getByRole('option', { name: '24' }),
    );

    expect((screen.getByRole('option', { name: '24' }) as HTMLOptionElement).selected).toBeTruthy();
    expect(screen.getByText(/Monthly Payment: £/)).toHaveTextContent(/£879.38/i);

    await userEvent.selectOptions(
      screen.getByRole('combobox'),
      screen.getByRole('option', { name: '36' }),
    );

    expect((screen.getByRole('option', { name: '36' }) as HTMLOptionElement).selected).toBeTruthy();
    expect(screen.getByText(/Monthly Payment: £/)).toHaveTextContent(/£586.25/i);

    await userEvent.selectOptions(
      screen.getByRole('combobox'),
      screen.getByRole('option', { name: '48' }),
    );

    expect((screen.getByRole('option', { name: '48' }) as HTMLOptionElement).selected).toBeTruthy();
    expect(screen.getByText(/Monthly Payment: £/)).toHaveTextContent(/£439.69/i);
  });
});
