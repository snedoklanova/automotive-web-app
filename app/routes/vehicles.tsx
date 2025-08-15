import type { Route } from "./+types/vehicles";

import { Vehicles, type VehiclesProps } from "../components/vehicles";

export async function loader() {
  const response = await fetch(`http://localhost:5173/api/vehicles`);
  const vehicles = await response.json();

  if (Object.keys(vehicles).length === 0) throw new Error("No Vehicles list found");

  return { ...vehicles };
}

const VehiclesPage = ({ loaderData }: { loaderData: VehiclesProps }) => {
  return (
    <div className="m-6">
      <Vehicles loaderData={loaderData} />
    </div>
  );
}

export default VehiclesPage;
