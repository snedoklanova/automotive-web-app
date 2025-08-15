import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";

import VehiclePage from "./vehicle";
import data from "../../data/vehicles.json";


vi.mock('../components/vehicle', () => ({
    Vehicle: () => {
        return <div data-testid="vehicle-container" />;
    },
}));

vi.mock('../components/finance-quote', () => ({
    FinanceQuote: () => {
        return <div data-testid="finance-quote-container" />;
    },
}));

describe("<VehiclePage />", () => {
    test(" should render correctly", () => {
        render(<VehiclePage loaderData={{ ...data[1] }} />);

        expect(screen.getByTestId("vehicle-container")).toBeInTheDocument();
        expect(screen.getByTestId("finance-quote-container")).toBeInTheDocument();
    });
});
