
export interface VehiclesInputProps {
  inputOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const VehiclesInput = ({ inputOnChange }: VehiclesInputProps) => {
  return (
    <input
      name="input-field"
      placeholder="Search..."
      type="text"
      className="border-2 border-gray-300 rounded-md m-4 p-2 w-3xs"
      onChange={inputOnChange}
      aria-label="Search vehicles"
    />
  );
};