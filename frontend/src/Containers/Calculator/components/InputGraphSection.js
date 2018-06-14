import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import DisplayGraph from './DisplayGraph'
import './InputGraphSection.css'
import './CurrencyInput.css'
import './SliderInput.css'

class InputGraphSection extends Component {
  constructor (props) {
    super(props)

    this.parseCalculationData = this.parseCalculationData.bind(this)
  }

  parseCalculationData () {
    if (!this.props.calculationData) {
      return []
    }
    return this.props.calculationData.results.map((elem, index) => {
      return {
        period: index,
        amount: elem
      }
    })
  }

  render () {
    const {
      calculationData,
      errors,
      handleChangeFunction,
      interestPaymentOccurrence,
      interestRate,
      loading,
      savingsAmount,
      savingsPerMonth
    } = this.props
    return (
      <div>
        <div className='financial-inputs'>
          <p className='input-label'>How much have you saved?</p>
          <div className={`currency-input ${savingsAmount !== undefined ? 'default-value' : ''}`}>
            <span>£</span>
            <input
              id={'savingsAmount'}
              type='text'
              value={savingsAmount}
              onChange={handleChangeFunction} />
          </div>
          <p className='input-label'>How much will you save each month?</p>
          <div className={`currency-input ${savingsAmount !== undefined ? 'default-value' : ''}`}>
            <span>£</span>
            <input
              id={'savingsPerMonth'}
              type='text'
              value={savingsPerMonth}
              onChange={handleChangeFunction} />
          </div>
          <p className='input-label'>
            How much interest will you earn per year?
          </p>
          <div className='fmz-slider'>
            <p>{interestRate}%</p>
            <input
              id={'interestRate'}
              type='range'
              value={interestRate}
              min={0}
              max={10}
              step={0.25}
              onChange={handleChangeFunction} />
          </div>
          <select id={'interestPaymentOccurrence'} value={interestPaymentOccurrence} onChange={handleChangeFunction} >
            <option value={1}>Monthly</option>
            <option value={4}>Quarterly</option>
            <option value={12}>Yearly</option>
          </select>
        </div>
        {!errors
          ? <div className='financial-display'>
            {!loading
              ? <React.Fragment>
                {calculationData
                  ? <DisplayGraph data={this.parseCalculationData()} />
                  : <h3>No data to show</h3>
                }
              </React.Fragment>
              : 'Loading ...'
            }
          </div>
          : <div style={{color: 'red', fontWeight: 'bold'}}>{errors}</div>
        }
      </div>
    )
  }
}

InputGraphSection.propTypes = {
  calculationData: PropTypes.object,
  errors: PropTypes.string,
  handleChangeFunction: PropTypes.func.isRequired,
  interestRate: PropTypes.number,
  interestPaymentOccurrence: PropTypes.number,
  loading: PropTypes.bool.isRequired,
  savingsAmount: PropTypes.number,
  savingsPerMonth: PropTypes.number
}

const mapStateToProps = (state) => {
  return {
    errors: state.calculator.errors,
    loading: state.ui.loading
  }
}

export default connect(mapStateToProps, null)(InputGraphSection)
