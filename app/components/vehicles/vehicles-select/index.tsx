
export interface VehiclesSelectProps {
  sortOption: string;
  selectOnChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const VehiclesSelect = ({ sortOption, selectOnChange }: VehiclesSelectProps) => {
  return (
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
  );
}