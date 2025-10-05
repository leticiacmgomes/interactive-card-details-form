import { CompleteStateWrapper } from "./CompleteState.styles";
import { Button } from "../ui/Button";
import iconComplete from "../../assets/images/icon-complete.svg";
import { useFormStore } from "../../store/formStore";

export const CompleteState = () => {
    const reset = useFormStore(state => state.reset)
  return (
    <CompleteStateWrapper>
      <img src={iconComplete} alt="ìcone de check" />
      <h1>thank you!</h1>
      <p>We've added your card details</p>
      <Button text="Continue" onClick={reset}/>
    </CompleteStateWrapper>
  );
};
