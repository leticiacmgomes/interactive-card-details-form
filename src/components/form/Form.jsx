import { FormWrapper } from "./Form.styles";
import { Input } from "./Input";
import { Button } from "../ui/Button";
import { useFormStore, formStore } from "../../store/formStore";
import { validateForm } from "../../hooks/validateForm";
import { useState } from "react";

const inputs = [
  {
    id: "cardName",
    labelText: "cardholder name",
    placeholder: "e.g. Jane Appleseed",
  },
  {
    id: "cardNumber",
    labelText: "card number",
    placeholder: "e.g. 1234 5678 9123 0000",
  },
  {
    id: "cardExpirationMonth",
    labelText: "exp. date (MM/YY)",
    placeholder: "MM",
  },
  { id: "cardExpirationYear", labelText: "", placeholder: "YY" },
  { id: "cardCvc", labelText: "CVC", placeholder: "e.g. 123" },
];

export const Form = () => {
  const { setValue } = useFormStore();
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValues = formStore.getState().cardInfo;
    const newErrors = validateForm(formValues);
    const setIsFormSubmitted = formStore.getState().setIsFormSubmitted
    if (Object.keys(newErrors).length !== 0) {
      setErrors(newErrors);
      return;
    } else {
      setIsFormSubmitted(true)
      setErrors({});
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      {inputs.map(({ id, labelText, placeholder }) => (
        <Input
          key={id}
          id={id}
          labelText={labelText}
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value, id)}
          error={errors[id]}
        />
      ))}

      <Button text="confirm" />
    </FormWrapper>
  );
};
