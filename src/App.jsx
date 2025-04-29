import './App.css'

import { useSelector } from 'react-redux'

/*Modals*/
import { CardModal } from './features/card/CardModal.jsx'
import { Form } from './features/form/Form.jsx'
import { SuccessModal } from './features/confirmation/SuccessModal.jsx'

function App() {
  
  const isFormValid = useSelector(state => state.form.isFormValid)
  
  return (
    <div className="App">
      <CardModal />
      {isFormValid ?
        <SuccessModal /> :
        <Form />
      }
    </div>
  )
}

export default App
