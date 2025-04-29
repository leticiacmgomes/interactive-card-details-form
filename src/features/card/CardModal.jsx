import './CardModal.css'

import { useSelector } from 'react-redux'

/*Images*/
import cardLogo from '../../assets/card-logo.svg'

export const CardModal = () => {
  
  const {name, cardNumber, expirationMonth, expirationYear, cvc} = useSelector(state => state.form.cardInfo)
  
  return(
    <div className="card-modal">
      <div className="card-back">
        <span className="cvc">{cvc ? cvc : '000'}</span>
      </div>
      
      <div className="card-front">
        <img 
          className="card-logo" 
          src={cardLogo} 
          alt="card logo" 
        />
        
        <span className="card-number">{cardNumber ? cardNumber : '0000 0000 0000 0000'}</span>
        <span className="name">{name ? name : 'Jane Appleseed'}</span>
        <span className="expiration-date">{expirationMonth ? expirationMonth : '00'} / {expirationYear ? expirationYear : '00'}</span>
      </div>
    </div>
  )
}