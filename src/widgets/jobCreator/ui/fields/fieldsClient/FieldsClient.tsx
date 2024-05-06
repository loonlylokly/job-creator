import { FieldSet } from "@/app/features/fieldset/FieldSet";

export const FieldsClient = () => {
  return (
    <FieldSet title="Client details">
      <div>
        <input type="text" placeholder="First name" />
        <input type="text" placeholder="Last name" />
      </div>
      <input type="text" placeholder="(233)333-4455" />
      <input type="email" placeholder="test@test.test" />
    </FieldSet>
  );
};
