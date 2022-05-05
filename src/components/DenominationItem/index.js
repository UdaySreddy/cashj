// Write your code here
const DenominationItem = props => {
  const {denominations} = props
  const {value} = denominations
  return (
    <div>
      <button type="button">{value}</button>
    </div>
  )
}

export default DenominationItem
