import { useState } from 'react'

export const useFormValidation = (formData) => {
  const {name, cardNumber, expirationMonth, expirationYear, cvc } = formData
  const [errors, setErrors] = useState({})
  
  const validateForm = () => {
    const newErrors = {}
    
    if (name.length === 0) {
      newErrors.name = "Can't be blank"
    }
    
    const pattern = /^[0-9]+$/
    if (cardNumber.length === 0) {
      newErrors.cardNumber = "Can't be blank"
    } else if (!pattern.test(cardNumber)) {
      newErrors.cardNumber = "Wrong format, only numbers"
    } else if (cardNumber.length < 16) {
      newErrors.cardNumber = "Min is 16 numbers"
    }
    
    if (expirationMonth.length === 0) {
      newErrors.expirationMonth = "Can't be blank"
    } else if (Number(expirationMonth) < 0 || Number(expirationMonth) > 12) {
      newErrors.expirationMonth = "Fill correctly"
    }
    
    if (expirationYear.length === 0) {
      newErrors.expirationYear = "Can't be blank"
    } else if (expirationYear.length < 0) {
      newErrors.expirationYear = "Fill correctly"
    }
    
    if (cvc.length === 0) {
      newErrors.cvc = "Can't be blank"
    } else if(cvc.length < 3) {
      newErrors.cvc = "Min is 3 numbers"
    }
    
    setErrors(newErrors)
    
    return Object.keys(newErrors).length === 0
  }
  
  return { errors, validateForm }
}