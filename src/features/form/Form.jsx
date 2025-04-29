import './Form.css'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

/*Components*/
import { Input } from './Input.jsx'
import { Button } from '../../components/ui/Button.jsx'

/*Actions*/ 
import { setName, setCardNumber, setExpirationMonth, setExpirationYear, setCvc, setFormValidity } from '../../store/formSlice.jsx'
import { useFormValidation } from '../../hooks/useFormValidation.jsx'

export const Form = () => {
  
  const dispatch = useDispatch()
  const { name, cardNumber, expirationMonth, expirationYear, cvc } = useSelector(state => state.form.cardInfo)
  
  const { errors, validateForm } = useFormValidation({name, cardNumber, expirationMonth, expirationYear, cvc})
  
  const handleSubmit = () => {
    if (validateForm()) {
      dispatch(setFormValidity(true))
    }
  }
  
  return(
    <div className="form">
      <form>
        <Input
          className="input-name input-container"
          id="name"
          labelText="cardholder name"
          type="text"
          placeholder="e.g. Jane Appleseed"
          isInvalid={errors.name}
          error={errors.name}
          onChange={(e) => dispatch(setName(e.target.value))}
        />
        <Input 
          className="input-card-number input-container"
          id="cardNumber"
          labelText="card number"
          type="text"
          placeholder="1234 5678 9123 0000"
          maxlength="16"
          isInvalid={errors.cardNumber}
          error={errors.cardNumber}
          onChange={(e) => dispatch(setCardNumber(e.target.value))}
        />
        
        <div className="input-expiration-date">
          <span className="label-expiration-date">exp. date (MM/YY)</span>
          
          <Input
            className="input-month input-container"
            id="expMonth"
            labelText=""
            type="text"
            placeholder="MM"
            maxlength="2"
            isInvalid={errors.expirationMonth}
            error={errors.expirationMonth}
            onChange={(e) => dispatch(setExpirationMonth(e.target.value))}
          />
          <Input 
            className="input-year input-container"
            id="expYear"
            labelText=""
            type="text"
            placeholder="YY"
            maxlength="2"
            isInvalid={errors.expirationYear}
            error={errors.expirationYear}
            onChange={(e) => dispatch(setExpirationYear(e.target.value))}
          />
        </div>
        
        <Input 
          className="input-cvc input-container"
          id="cvc"
          labelText="CVC"
          type="text"
          placeholder="e.g. 123"
          maxlength="3"
          isInvalid={errors.cvc}
          error={errors.cvc}
          onChange={(e) => dispatch(setCvc(e.target.value))}
        />
      </form>
      
      <Button 
        buttonText="Confirm"
        onClick={handleSubmit}
      />
    </div>
  )
}