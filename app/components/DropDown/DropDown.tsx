export interface DropDownProps {
  /** Text shown inside the drop down button */
  label: string | undefined;
  /** Optional icon path shown left of the label */
  iconPath?: string;
  /** Height of the drop down button */
  height: 'small' | 'medium' | 'large';
  /** Click handler */
  onClick: () => void;
}

const heightClasses: Record<string, string> = {
  small: 'h-[37px]',
  medium: 'h-[43px]',
  large: 'h-[50px]',
};

export const DropDown = ({ label, iconPath, onClick, height }: DropDownProps) => {
  return (
    <div
      className={`bg-neutral-600 rounded-8 flex justify-between items-center gap-125 px-200 py-150 cursor-pointer ${heightClasses[height]}`}
      onClick={onClick}
    >
      <div className="flex gap-125">
        {iconPath && <img src={iconPath} alt="Drop down icon" width="16" height="12" />}
        <div className="preset-7">{label ? label : '-'}</div>
      </div>
      <img
        src="/images/icon-dropdown.svg"
        className=""
        alt="Drop down icon"
        width="12"
        height="18"
      />
    </div>
  );
};
