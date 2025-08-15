import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";

import VehiclesPage from "./vehicles";
import data from "../../data/vehicles.json";


vi.mock('../components/vehicles', () => ({
    Vehicles: () => {
        return <div data-testid="vehicles-container" />;
    },
}));

describe("<VehiclesPage />", () => {
    test(" should render correctly", () => {
        render(<VehiclesPage loaderData={{ vehicles: [...data] }} />);

        expect(screen.getByTestId("vehicles-container")).toBeInTheDocument();
    });
});
