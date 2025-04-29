import './SuccessModal.css'

/*Componentes*/
import { Button } from '../../components/ui/Button.jsx'

import iconComplete from '../../assets/icon-complete.svg'

export const SuccessModal = () => {
  return(
    <div className="success-modal">
      <img src={iconComplete} alt="icon complete" />
      <strong>Thank You!</strong>
      <p>We've added your card details</p>
      <Button
        onClick={() => location.reload()}
        buttonText="Continue"
      />
    </div>
  )
}