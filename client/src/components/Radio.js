function Radio({name, value, id, checked, onCheck}) {
  return (
    <>
      <input name={name} id={id} type='radio' value={value} checked={checked} onChange={e => onCheck(e.target.value)}/>
      <label htmlFor={id}>{value}</label>
    </>
  )
}

export default Radio;
