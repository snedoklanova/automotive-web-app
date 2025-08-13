// import type { Route } from "./+types/vehicles";
import { useEffect, useState } from "react";
import { type VehicleProps } from "../vehicle";

export interface VehiclesProps {
  vehicles: VehicleProps[];
}

export const Vehicles = ({ loaderData }: { loaderData: VehiclesProps }) => {
  const { vehicles } = loaderData;
  const [vehiclesList, setVehiclesList] = useState<VehicleProps[]>(vehicles);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');

  const inputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const selectOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.target.value);
  };

  useEffect(() => {
    switch (sortOption) {
      case "":
        setVehiclesList(vehicles);
        break;
      case "priceAscending":
        setVehiclesList((prevList) => [...prevList].sort((a, b) => a.price - b.price));
        break;
      case "priceDescending":
        setVehiclesList((prevList) => [...prevList].sort((a, b) => b.price - a.price));
        break;
      case "yearAscending":
        setVehiclesList((prevList) => [...prevList].sort((a, b) => a.year - b.year));
        break;
      case "yearDescending":
        setVehiclesList((prevList) => [...prevList].sort((a, b) => b.year - a.year));
        break;
      case "mileageAscending":
        setVehiclesList((prevList) => [...prevList].sort((a, b) => a.mileage - b.mileage));
        break;
      case "mileageDescending":
        setVehiclesList((prevList) => [...prevList].sort((a, b) => b.mileage - a.mileage));
        break;
    }
  }, [sortOption]);


  useEffect(() => {
    const filterVehicles = (searchTerm: string) => {
      return vehicles.filter(vehicle =>
        Object.values(vehicle).some(val =>
          val.toString().toLowerCase().includes(searchTerm)
        )
      );
    };

    searchTerm === ''
      ? setVehiclesList(vehicles)
      : setVehiclesList(filterVehicles(searchTerm));
  }, [searchTerm]);

  return (
    <div data-testid="vehicles-container">
      <input
        name="input-field"
        placeholder="Search..."
        type="text"
        className="border-2 border-gray-300 rounded-md m-4 p-2 w-3xs"
        onChange={inputOnChange}
        aria-label="Search vehicles"
      />
      <select
        name="sort"
        id="sort-select"
        className="border-2 border-gray-300 rounded-md m-4 p-2 w-3xs"
        onChange={selectOnChange}
        value={sortOption}
        aria-label="Sort vehicles"
      >
        <option value="">Sort by:</option>
        <option value="priceAscending">Price: Low to High</option>
        <option value="priceDescending">Price: High to Low</option>
        <option value="yearAscending">Year: Low to High</option>
        <option value="yearDescending">Year: High to Low</option>
        <option value="mileageAscending">Mileage: Low to High</option>
        <option value="mileageDescending">Mileage: High to Low</option>
      </select>
      <ul
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        data-testid="vehicles-list"
      >
        {vehiclesList.length > 0 ? vehiclesList.map((vehicle) => (
          <li className="rounded-md m-4 p-4 bg-gray-100 hover:bg-gray-200" key={vehicle.id} data-testid="vehicle-card">
            <a className="" href={`/${vehicle.id}`}>
              <h2 className="text-lg font-bold text-gray-900" data-testid="vehicle-card-title">{vehicle.make} {vehicle.model}</h2>
              <p>Year: {vehicle.year}</p>
              <p>Price: £{vehicle.price}</p>
              <p>Mileage: {vehicle.mileage} miles</p>
              <p>Colour: {vehicle.colour}</p>
            </a>
          </li>
        )) : <li>No vehicles found</li>}
      </ul>
    </div>
  );
};
