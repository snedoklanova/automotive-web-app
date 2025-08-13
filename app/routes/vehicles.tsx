import type { Route } from "./+types/vehicles";
import Vehicles, { type VehiclesProps } from "../components/vehicles";
import data from "../data/vehicles.json";

export async function loader() {
  if (!data) throw new Error("Vehicles not found");

  return { vehicles: [...data] };
}

const VehiclesPage = ({ loaderData }: { loaderData: VehiclesProps }) => {
  return (
    <div className="m-6">
      <Vehicles loaderData={loaderData} />
    </div>
  );
}

export default VehiclesPage;
