import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";

import VehiclesPage, { loader } from "./vehicles";
import data from "../../data/vehicles.json";

describe("function loader", () => {
  test("should call /vehicles and return correct data", async () => {
    const mockResponse = { vehicles: data };

    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      }),
    );

    const response = await loader();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('http://localhost:5173/api/vehicles');
    expect(response).toEqual(mockResponse);
  });

  test("should call /vehicles and return an error", async () => {
    const mockEmptyResponse = { vehicles: {} };

    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockEmptyResponse),
      }),
    );

    const response = await loader();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('http://localhost:5173/api/vehicles');
    expect(response).toEqual(new Error("No Vehicles list found"));
  });
});

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
