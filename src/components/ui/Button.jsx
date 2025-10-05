import { ButtonWrapper } from "./Button.styles"

export const Button = ({ text, onClick }) => {
  return (
    <ButtonWrapper onClick={onClick}>{ text }</ButtonWrapper>
  )
}
