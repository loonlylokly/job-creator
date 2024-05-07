import { title } from "process";
import style from "./FieldSet.module.css";

type TProps = {
  title: string;
  children: React.ReactNode;
};

export const FieldSet = ({ title, children }: TProps) => {
  return (
    <div className={style.fieldset}>
      <h2 className={style.title}>{title}</h2>
      <div>{children}</div>
    </div>
  );
};
