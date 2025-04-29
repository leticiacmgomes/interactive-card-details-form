import './Input.css'

export const Input = ({ className, id, labelText, type, placeholder, maxlength, isInvalid, error, onChange }) => {
  return(
    <div className={className}>
      <label for={id}>{labelText}</label>
      <input
        className={isInvalid && 'invalid'}
        id={id}
        type={type} 
        placeholder={placeholder}
        maxLength={maxlength}
        onChange={onChange}
      />
      {error && <span className="error">{error}</span>}
    </div>
  )
}