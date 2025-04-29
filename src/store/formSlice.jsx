import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cardInfo: {
    name: '',
    cardNumber : '',
    expirationMonth: '',
    expirationYear: '',
    cvc: ''
  },
  isFormValid: false
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.cardInfo.name = action.payload;
    },
    
    setCardNumber: (state, action) => {
      state.cardInfo.cardNumber = action.payload;
    },
    
    setExpirationMonth: (state, action) => {
      state.cardInfo.expirationMonth = action.payload;
    },
    
    setExpirationYear: (state, action) => {
      state.cardInfo.expirationYear = action.payload;
    },
    
    setCvc: (state, action) => {
      state.cardInfo.cvc = action.payload;
    },
    
    setFormValidity: (state, action) => {
      state.isFormValid = action.payload;
    }
  }
})

export const { setName, setCardNumber, setExpirationMonth, setExpirationYear, setCvc, setFormValidity } = formSlice.actions;

export default formSlice.reducer;