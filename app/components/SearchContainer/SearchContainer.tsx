import { Button } from '../Button/Button';
import { SearchInput } from '../SearchInput/SearchInput';

export interface SearchContainerProps {
  /** Current input value */
  value: string;
  /** Change handler */
  onChange: (e: string) => void;
  /** Placeholder text */
  placeholder?: string;
}

export const SearchContainer = ({ value, onChange }: SearchContainerProps) => {
  return (
    <div className="grid grid-rows-2 md:grid-rows-none md:grid-cols-[auto_max-content] w-full lg:w-2xl lg:mx-auto items-center gap-3">
      <SearchInput value={value} onChange={onChange} />
      <Button label="Search" />
    </div>
  );
};
