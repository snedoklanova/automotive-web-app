import type { Route } from "./+types/vehicle";

import { FinanceQuote, type FinanceQuoteProps } from "../components/finance-quote";
import { Vehicle, type VehicleProps } from "../components/vehicle";

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
    totalDeposit: loaderData.price / 10,
    totalAmountOfCredit: loaderData.price - (loaderData.price / 10),
    numberOfMonthlyPayments: 60,
    monthlyPayment: (loaderData.price - (loaderData.price / 10)) / 60,
  } as FinanceQuoteProps;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-6">
      <Vehicle {...loaderData} />
      <FinanceQuote {...financeQuoteData} />
    </div>
  );
}

export default VehiclePage;
