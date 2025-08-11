// import type { Route } from "./+types/vehicles";
import { type VehicleProps } from "../vehicle";

export interface VehiclesProps {
  vehicles: VehicleProps[];
}

const Vehicles = ({
  loaderData,
}: {
  loaderData: VehiclesProps;
}) => {
  return (
    <div className="vehicles-container">
      {loaderData.vehicles.map((vehicle) => (
        <a href={`/vehicles/${vehicle.id}`}>
          <div className="vehicle-card" key={vehicle.id}>
            <h2>{vehicle.make} {vehicle.model}</h2>
            <p>Year: {vehicle.year}</p>
            <p>Price: ${vehicle.price}</p>
            <p>Mileage: {vehicle.mileage} miles</p>
            <p>Colour: {vehicle.colour}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Vehicles;
