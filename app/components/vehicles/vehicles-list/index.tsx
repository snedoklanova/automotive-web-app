import { type VehicleProps } from "../../vehicle";
export interface VehiclesProps {
  vehiclesList: VehicleProps[];
}

export const VehiclesList = ({ vehiclesList }: VehiclesProps) => {
  return (
    <ul
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      data-testid="vehicles-list"
    >
      {vehiclesList.length > 0
        ? vehiclesList.map((vehicle) => (
          <li className="rounded-md m-4 p-4 bg-gray-100 hover:bg-gray-200" key={vehicle.id} data-testid="vehicle-card">
            <a className="" href={`/${vehicle.id}`}>
              <h2 className="text-lg font-bold text-gray-900" data-testid="vehicle-card-title">{vehicle.make} {vehicle.model}</h2>
              <p className="text-gray-900">Year: {vehicle.year}</p>
              <p className="text-gray-900">Price: £{vehicle.price}</p>
              <p className="text-gray-900">Mileage: {vehicle.mileage} miles</p>
              <p className="text-gray-900">Colour: {vehicle.colour}</p>
            </a>
          </li>
        )) : <li>No vehicles found</li>
      }
    </ul>
  );
};
