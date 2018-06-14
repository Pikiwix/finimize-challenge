import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import InputGraphSection from './components/InputGraphSection'
import './calculator.css'
import { getCalculations } from './actions/calculatorActions'

const delay = (() => {
  let timer = 0
  return function (callback, ms) {
    clearTimeout(timer)
    timer = setTimeout(callback, ms)
  }
})()

class Calculator extends Component {
  constructor (props) {
    super(props)

    this.state = {
      savingsAmount: 1000,
      savingsPerMonth: 10,
      interestRate: 1.0,
      interestPaymentOccurrence: 12
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  componentDidMount () {
    this.props.getCalculations(this.state)
  }

  handleInputChange (event) {
    this.setState({
      [event.target.id]: (event.target.id === 'interestRate')
        ? parseFloat(event.target.value)
        : parseInt(event.target.value, 10)
    })
    delay(() => this.props.getCalculations(this.state), 300)
  }

  render () {
    const { calculationData } = this.props
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Finimize dev challenge</h1>
        </header>
        <InputGraphSection
          {...this.state}
          calculationData={calculationData}
          handleChangeFunction={this.handleInputChange} />
      </div>
    )
  }
}

Calculator.propTypes = {
  calculationData: PropTypes.object,
  getCalculations: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    calculationData: state.calculator.calculationData
  }
}

const actions = {
  getCalculations
}

export default connect(mapStateToProps, actions)(Calculator)
