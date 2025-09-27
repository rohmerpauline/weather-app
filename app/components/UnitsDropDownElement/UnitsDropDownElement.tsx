export interface UnitOption {
  label: string;
  value: string;
}

export interface UnitsDropDownElementProps {
  /* Title to display above the options */
  title: string;
  /* Array of selectable options */
  options: UnitOption[];
  /* Currently selected value */
  selectedValue: string;
  /* Callback function when an option is selected */
  onSelect: (value: string) => void;
}

export const UnitsDropDownElement = ({
  title,
  options,
  selectedValue,
  onSelect,
}: UnitsDropDownElementProps) => {
  return (
    <div>
      <div className="preset-8 text-neutral-300 mb-100">{title}</div>
      <ul>
        {options.map((option) => (
          <li
            className={`border-neutral-600 px-100 py-125 cursor-pointer rounded-8 ${
              selectedValue === option.value ? 'bg-neutral-700' : ''
            }`}
            key={option.value}
            onClick={() => {
              onSelect(option.value);
            }}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
