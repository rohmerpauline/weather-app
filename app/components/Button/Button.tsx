export interface ButtonProps {
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}
export const Button = ({ label, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className="cursor-pointer preset-5 bg-blue-500 w-full hover:bg-blue-700 px-300 py-200 text-white rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2"
      {...props}
    >
      {label}
    </button>
  );
};
