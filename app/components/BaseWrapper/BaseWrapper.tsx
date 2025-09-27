export interface BaseWrapperProps {
  /** Content to be displayed inside a wrapper */
  children: React.ReactNode;
}

export const BaseWrapper = ({ children }: BaseWrapperProps) => {
  return (
    <div className="bg-neutral-800 border-neutral-600 rounded-12 text-neutral-0">
      {children}
    </div>
  );
};
