import logo from "../../assets/images/card-logo.svg";
import {
  CardWrapper,
  CardFront,
  Logo,
  CardName,
  CardNumber,
  ExpirationDate,
  CardBack,
  CardCvc,
} from "./Card.styles";

import { useFormStore } from "../../store/formStore";

export const Card = () => {

  const cardInfo = useFormStore(state => state.cardInfo);
  const { cardName, cardNumber, cardExpirationMonth, cardExpirationYear, cardCvc } = cardInfo;
  return (
    <CardWrapper>
      <CardBack>
        <CardCvc>{ cardCvc || '000' }</CardCvc>
      </CardBack>
      <CardFront>
        <Logo src={logo} alt="Logo" />
        <CardNumber>{ cardNumber.replace(/([0-9]{4})/g, '$1 ') || '0000 0000 0000 0000' }</CardNumber>
        <CardName>{ cardName || 'jane appleseed' }</CardName>
        <ExpirationDate>{ cardExpirationMonth || '00' }/{ cardExpirationYear || '00' }</ExpirationDate>
      </CardFront>
    </CardWrapper>
  );
};
