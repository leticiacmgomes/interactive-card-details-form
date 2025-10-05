import { createStore } from "zustand";
import { useStore } from "zustand/react";

const initialState = {
  cardName: "",
  cardNumber: "",
  cardExpirationMonth: "",
  cardExpirationYear: "",
  cardCvc: "",
};

export const formStore = createStore((set) => ({
  isFormSubmitted: false,
  setIsFormSubmitted: (value) => set({ isFormSubmitted: value}),
  cardInfo: initialState,
  setValue: (value, id) => set((state) => {
    if (value.trim() === "") {
      return { cardInfo: {...state.cardInfo, [id]: initialState[id]}}
    }

    return { cardInfo: {...state.cardInfo, [id]: value}}
  }),
  reset: () => set({ cardInfo: initialState, isFormSubmitted: false})
}));

export const useFormStore = (selector) => useStore(formStore, selector);
