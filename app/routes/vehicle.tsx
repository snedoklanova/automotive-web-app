import type { Route } from "./+types/vehicle";

import FinanceQuote, { type FinanceQuoteProps } from "../components/finance-quote";
import Vehicle, { type VehicleProps } from "../components/vehicle";

import data from "../data/vehicles.json";

export async function clientLoader({
  params,
}: Route.ClientLoaderArgs) {
  const vehicle = data.find((vehicle) => vehicle.id === params.vehicleId);

  if (!vehicle) throw new Error("Vehicle not found");

  return vehicle;
}

// HydrateFallback is rendered while the client loader is running
export function HydrateFallback() {
  return <div>Loading...</div>;
}

const VehiclePage = ({ loaderData }: { loaderData: VehicleProps }) => {
  const financeQuoteData = {
    onTheRoadPrice: loaderData.price,
    totalDeposit: 1000,
    totalAmountOfCredit: loaderData.price - 1000,
    numberOfMonthlyPayments: 60,
    monthlyPayment: (loaderData.price - 1000) / 60,
  } as FinanceQuoteProps;

  return (
    <div>
      <Vehicle {...loaderData} />
      <FinanceQuote {...financeQuoteData} />
    </div>
  );
}

export default VehiclePage;
