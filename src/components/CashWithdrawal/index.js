import {Component} from 'react'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  render() {
    const {denominationsList} = this.props
    return (
      <div>
        {denominationsList.map(each => (
          <DenominationItem denominations={each} />
        ))}
      </div>
    )
  }
}

export default CashWithdrawal
