type TProps = {
  title: string;
  children: React.ReactNode;
};

export const FieldSet = ({ children }: TProps) => {
  return (
    <div>
      <h2>Client details</h2>
      <div>{children}</div>
    </div>
  );
};
