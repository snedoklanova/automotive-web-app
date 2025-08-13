export interface VehicleProps {
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  colour: string;
  id: string;
}

export const Vehicle = (loaderData: VehicleProps) => {
  const { make, model, year, price, mileage, colour } = loaderData;

  return (
    <div
      className="m-4 p-6 bg-gray-100 rounded-md"
      data-testid="vehicle-container"
    >
      <h2 className="text-lg font-bold text-gray-900 mb-4">Vehicle Details</h2>
      <h4 className="text-md font-bold text-gray-900">{make} {model}</h4>
      <p>Year: {year}</p>
      <p>Price: £{price}</p>
      <p>Mileage: {mileage} miles</p>
      <p>Colour: {colour}</p>
    </div>
  );
};
