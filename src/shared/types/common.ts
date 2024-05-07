export type TInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type TDivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export type TInput = {
  label?: string;
  message?: string;
  styleField?: string;
  children?: React.ReactNode;
} & TInputProps;

export type TTextAreaProps = {
  label?: string;
  message?: string;
} & React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export type TSelectItem = {
  value: string;
  children?: React.ReactNode;
} & TDivProps;
