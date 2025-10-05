import { MainWrapper } from "./App.styles.jsx";
import { Card } from "./components/card/Card";
import { Form } from "./components/form/Form";
import { CompleteState } from "./components/complete-state/CompleteState.jsx";
import { useFormStore } from "./store/formStore.js";

function App() {
  const isFormSubmitted = useFormStore((state) => state.isFormSubmitted);
  return (
    <MainWrapper>
      <Card />
      {isFormSubmitted ? <CompleteState /> : <Form />}
    </MainWrapper>
  );
}

export default App;
