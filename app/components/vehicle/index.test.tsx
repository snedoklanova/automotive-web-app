import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { Vehicle } from ".";
import data from "../../../data/vehicles.json";

describe("<Vehicle />", () => {
	test(" should render correctly", () => {
		render(<Vehicle {...data[1]} />);

		expect(screen.getByTestId("vehicle-container")).toBeInTheDocument();
	});
});
