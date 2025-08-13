// import type { Route } from "./+types/vehicles";
import { useEffect, useState } from "react";
import { type VehicleProps } from "../vehicle";

import { VehiclesInput } from "./vehicles-input";
import { VehiclesSelect } from "./vehicles-select";
import { VehiclesList } from "./vehicles-list";

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
      <VehiclesInput inputOnChange={inputOnChange} />
      <VehiclesSelect sortOption={sortOption} selectOnChange={selectOnChange} />
      <VehiclesList vehiclesList={vehiclesList} />
    </div>
  );
};
