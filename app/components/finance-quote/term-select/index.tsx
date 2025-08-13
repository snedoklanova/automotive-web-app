export interface TermSelectProps {
  termOption: number;
  selectOnChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const TermSelect = ({ termOption, selectOnChange }: TermSelectProps) => {
  return (
    <select
      name="term"
      id="term-select"
      className="border-2 border-gray-300 rounded-md mb-6 p-2 w-3xs text-gray-900"
      onChange={selectOnChange}
      value={termOption}
      aria-label="Change term"
    >
      <option value={60}>60</option>
      <option value={48}>48</option>
      <option value={36}>36</option>
      <option value={24}>24</option>
      <option value={12}>12</option>
    </select>
  );
}