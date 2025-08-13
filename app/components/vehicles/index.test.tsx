import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import userEvent from "@testing-library/user-event";

import { Vehicles } from ".";
import data from "../../data/vehicles.json";

describe("<Vehicles />", () => {
  test("should render properly", () => {
    render(<Vehicles loaderData={{ vehicles: [...data] }} />);

    expect(screen.getByTestId("vehicles-container")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect((screen.getByRole('option', { name: 'Sort by:' }) as HTMLOptionElement).selected).toBeTruthy();
    expect(screen.getAllByTestId("vehicle-card")).toHaveLength(data.length);
  });

  test("should render sorting results by selecting an option", async () => {
    render(<Vehicles loaderData={{ vehicles: [...data] }} />);

    expect((screen.getByRole('option', { name: 'Sort by:' }) as HTMLOptionElement).selected).toBeTruthy();

    await userEvent.selectOptions(
      screen.getByRole('combobox'),
      screen.getByRole('option', { name: 'Price: Low to High' }),
    )

    expect((screen.getByRole('option', { name: 'Price: Low to High' }) as HTMLOptionElement).selected).toBeTruthy();
    expect(screen.getAllByTestId("vehicle-card")[0]).toHaveTextContent('Volkswagen Jetta');

    await userEvent.selectOptions(
      screen.getByRole('combobox'),
      screen.getByRole('option', { name: 'Price: High to Low' }),
    )

    expect((screen.getByRole('option', { name: 'Price: High to Low' }) as HTMLOptionElement).selected).toBeTruthy();
    expect(screen.getAllByTestId("vehicle-card")[0]).toHaveTextContent('Tesla Model 3');

    await userEvent.selectOptions(
      screen.getByRole('combobox'),
      screen.getByRole('option', { name: 'Year: Low to High' }),
    )

    expect((screen.getByRole('option', { name: 'Year: Low to High' }) as HTMLOptionElement).selected).toBeTruthy();
    expect(screen.getAllByTestId("vehicle-card")[0]).toHaveTextContent('Chevrolet Malibu');

    await userEvent.selectOptions(
      screen.getByRole('combobox'),
      screen.getByRole('option', { name: 'Year: High to Low' }),
    )

    expect((screen.getByRole('option', { name: 'Year: High to Low' }) as HTMLOptionElement).selected).toBeTruthy();
    expect(screen.getAllByTestId("vehicle-card")[0]).toHaveTextContent('Tesla Model 3');

    await userEvent.selectOptions(
      screen.getByRole('combobox'),
      screen.getByRole('option', { name: 'Mileage: Low to High' }),
    )

    expect((screen.getByRole('option', { name: 'Mileage: Low to High' }) as HTMLOptionElement).selected).toBeTruthy();
    expect(screen.getAllByTestId("vehicle-card")[0]).toHaveTextContent('Tesla Model 3');

    await userEvent.selectOptions(
      screen.getByRole('combobox'),
      screen.getByRole('option', { name: 'Mileage: High to Low' }),
    )

    expect((screen.getByRole('option', { name: 'Mileage: High to Low' }) as HTMLOptionElement).selected).toBeTruthy();
    expect(screen.getAllByTestId("vehicle-card")[0]).toHaveTextContent('Volkswagen Jetta');
  });

  test("should render vehicles cards when vehicles were found by typing within input", async () => {
    render(<Vehicles loaderData={{ vehicles: [...data] }} />);

    expect(screen.getAllByRole('textbox')).toHaveLength(1);

    await fireEvent.change(screen.getByRole('textbox'), { target: { value: 'to' } })

    expect(screen.getAllByTestId("vehicle-card")).toHaveLength(2);
  });

  test("should not render vehicles card when no vehicle was found by typing within input", async () => {
    render(<Vehicles loaderData={{ vehicles: [...data] }} />);

    expect(screen.getAllByRole('textbox')).toHaveLength(1);

    await fireEvent.change(screen.getByRole('textbox'), { target: { value: 'z' } })

    expect(screen.getByText(/No vehicles found/i)).toBeInTheDocument();
  });
});
