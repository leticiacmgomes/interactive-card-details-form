import { InputWrapper, Error } from './Input.styles'

export const Input = ({ id, labelText, placeholder, onChange, error }) => {
  return (
    <InputWrapper $id={id} $error={error}>
      <label htmlFor={id}>{labelText}</label>
      <input onChange={onChange} id={id} type="text" placeholder={placeholder} />
      {
        error && <Error>{error}</Error>
      }
    </InputWrapper>
  );
};
