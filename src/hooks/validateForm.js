export const validateForm = (formValues) => {
  const { cardName, cardNumber, cardExpirationMonth, cardExpirationYear, cardCvc } =
    formValues;

  const errors = {};
  const nameRegex = /^[a-zA-Z\s]+$/;
  const CardNumberRegex = /^[0-9]{16}$/;
  const monthRegex = /^(0[1-9]|1[0-2])$/;
  const yearRegex = /^([0-9][0-9])$/;
  const cardCvcRegex = /^[0-9]{3}$/;

  if (!cardName || cardName.trim() === "") {
    errors.cardName = "Can't be blank";
  } else if (!nameRegex.test(cardName)) {
    errors.cardName = "Wrong format, letters only";
  }

  if (!cardNumber || cardNumber.trim() == "") {
    errors.cardNumber = "Can't be blank";
  } else if (!CardNumberRegex.test(cardNumber)) {
    errors.cardNumber = "Wrong format, please follow the format";
  }

  if (cardExpirationMonth === "") {
    errors.cardExpirationMonth = "Can't be blank";
  } else if (!monthRegex.test(cardExpirationMonth)) {
    errors.cardExpirationMonth = "Invalid month";
  }

  if (!cardExpirationYear || cardExpirationYear.trim() === "") {
    errors.cardExpirationMonth = "Can't be blank";
  } else if (!yearRegex.test(cardExpirationYear)) {
    errors.cardExpirationMonth = "Invalid year";
  }

  if (!cardCvc || cardCvc.trim() === "") {
    errors.cardCvc = "Can't be blank";
  } else if (!cardCvcRegex.test(cardCvc)) {
    errors.cardCvc = "Invalid CVC, please follow the format";
  }

  return errors;
};
