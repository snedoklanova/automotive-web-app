import FinanceQuote, { type FinanceQuoteProps } from "../finance-quote";
export interface VehicleProps {
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  colour: string;
  id: string;
}

const Vehicle = (props: VehicleProps) => {
  const { make, model, year, price, mileage, colour } = props;

  return (
    <div className="vehicle-container">
      <h2>{make} {model}</h2>
      <p>Year: {year}</p>
      <p>Price: ${price}</p>
      <p>Mileage: {mileage} miles</p>
      <p>Colour: {colour}</p>
    </div>
  );
};

export default Vehicle;
