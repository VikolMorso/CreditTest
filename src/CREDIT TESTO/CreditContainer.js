import React from 'react';

import { connect } from 'react-redux'
import s from './credit.module.css'
import {
  changePropertyValue, changeInitialPayment, changeCreditTerm,
  changeInterestRates, isSAVE, isCLEAR, persent, disableRadio
} from './state/credit-reduce'

class CreditContainer extends React.Component {
  state = {
    monthlyPayment: 0,
    requiredIncome: 0,
    overpayment: 0,
    bodyCredit: 0,
    form: {
      rbtn1: false,
      rbtn2: false,
      rbtn3: false,
      rbtn4: false,
      rbtn5: false
    }
  }

  componentDidMount() {
    if (localStorage.length > 0) {
      const propertyValue = localStorage.getItem('propertyValue');
      const initialPayment = localStorage.getItem('initialPayment');
      const creditTerm = localStorage.getItem('creditTerm');
      const interestRates = localStorage.getItem('interestRates');
      this.props.isSAVE(propertyValue, initialPayment, creditTerm, interestRates)


    }
  }

  isSave = () => {
    localStorage.setItem('propertyValue', this.props.propertyValue);
    localStorage.setItem('initialPayment', this.props.initialPayment);
    localStorage.setItem('creditTerm', this.props.creditTerm);
    localStorage.setItem('interestRates', this.props.interestRates);
    debugger
  }
  recalculate = (propertyValue, initialPayment, creditTerm, interestRates) => {

    let pV = propertyValue.replace(/[\s.,]+/g, '')
    let iP = initialPayment.replace(/[\s.,]+/g, '')
    let cT = creditTerm.replace(/[\s.,]+/g, '')
    let iR = interestRates.replace(/[\s.,]+/g, '')

    let newbody = (Number.parseInt(pV) - Number.parseInt(iP))
    let helpformul1 = Number.parseInt(iR) / 1200
    let helpformul2 = Math.pow(1 + helpformul1, Number.parseInt(cT))
    let helpformul3 = helpformul1 / (helpformul2 - 1);
    let newmonthlyPayment = Math.round(newbody * (helpformul1 + helpformul3))
    let newrequiredIncome = Math.round(5 * Number.parseInt(newmonthlyPayment) / 3);
    let newoverpayment = (newmonthlyPayment * Number.parseInt(cT) - Number.parseInt(pV) + Number.parseInt(iP))
    this.setState({
      bodyCredit: newbody.toLocaleString(),
      monthlyPayment: newmonthlyPayment.toLocaleString(),
      requiredIncome: newrequiredIncome.toLocaleString(),
      overpayment: newoverpayment.toLocaleString()
    })

  }

  isClear = () => {
    this.props.isCLEAR()
    debugger
    this.setState({
      monthlyPayment: '',
      requiredIncome: '',
      overpayment: '',
      bodyCredit: ''
    })
  }


  changePropertyValue = (e) => {
    this.props.changePropertyValue(e.currentTarget.value)
    if (this.props.persentBoolean === true) {
      this.props.persent(this.props.persentValue)
    }



  }

  changeInitialPayment = (e) => {
    this.props.changeInitialPayment(e.currentTarget.value)
  }

  changeCreditTerm = (e) => {
    debugger
    this.props.changeCreditTerm(e.currentTarget.value)
  }

  changeInterestRates = (e) => {
    this.props.changeInterestRates(e.currentTarget.value)
  }
  componentDidUpdate(prevProps, prevState = this.state) {
    if (prevProps !== this.props && prevState !== this.localState) {
      this.recalculate(this.props.propertyValue, this.props.initialPayment, this.props.creditTerm, this.props.interestRates)
      console.log(this.state)
    }
  }



  tenPercent = (e) => {
    this.props.persent(e.currentTarget.value)
    this.setState({
      form: {
        rbtn1: true,
        rbtn2: false,
        rbtn3: false,
        rbtn4: false,
        rbtn5: false
      }
    })
  }
  fifteenPercent = (e) => {
    this.props.persent(e.currentTarget.value)
    this.setState({
      form: {
        rbtn1: false,
        rbtn2: true,
        rbtn3: false,
        rbtn4: false,
        rbtn5: false
      }
    })
  }
  twentyPercent = (e) => {
    this.props.persent(e.currentTarget.value)
    this.setState({
      form: {
        rbtn1: false,
        rbtn2: false,
        rbtn3: true,
        rbtn4: false,
        rbtn5: false
      }
    })
  }
  twentyFivePercent = (e) => {
    this.props.persent(e.currentTarget.value)
    this.setState({
      form: {
        rbtn1: false,
        rbtn2: false,
        rbtn3: false,
        rbtn4: true,
        rbtn5: false
      }
    })
  }
  thirtyPercent = (e) => {
    this.props.persent(e.currentTarget.value)
    this.setState({
      form: {
        rbtn1: false,
        rbtn2: false,
        rbtn3: false,
        rbtn4: false,
        rbtn5: true
      }
    })
  }

  DisableRadio = () => {
    this.props.disableRadio()
    this.setState({
      form: {
        rbtn1: false,
        rbtn2: false,
        rbtn3: false,
        rbtn4: false,
        rbtn5: false
      }
    })
    this.props.changeInitialPayment('');
  }

  render() {
    return (<div className={s.body}>

      <div className={s.left_column}>
        <div className={s.left_column__child}>
          Стоимость недвжмости (в рублях)
      <div>
            <input value={this.props.propertyValue} className={s.input} onChange={this.changePropertyValue} className={s.input} />
          </div>
        </div>
        <div className={s.left_column__child}>
          Первоначальный взнос (в рублях)
      <div>
            <input value={this.props.initialPayment} className={s.input} onChange={this.changeInitialPayment} className={s.input} />
          </div>
          <form>
            <input type='checkbox' name='radiobtn' checked={this.state.form.rbtn1} onChange={this.tenPercent} value='10' />10%
          <input type='checkbox' name='radiobtn' checked={this.state.form.rbtn2} onChange={this.fifteenPercent} value='15' />15%
          <input type='checkbox' name='radiobtn' checked={this.state.form.rbtn3} onChange={this.twentyPercent} value='20' />20%
          <input type='checkbox' name='radiobtn' checked={this.state.form.rbtn4} onChange={this.twentyFivePercent} value='25' />25%
          <input type='checkbox' name='radiobtn' checked={this.state.form.rbtn5} onChange={this.thirtyPercent} value='30' />30%
          </form>
          <button onClick={this.DisableRadio} className={s.btn}>убрать</button>

        </div>
        <div className={s.left_column__child}>
          Срок кредита (лет)
      <div><input value={this.props.creditTerm} className={s.input} onChange={this.changeCreditTerm} className={s.input} /></div>
        </div>
        <div className={s.left_column__child}>
          Процентная ставка (%)
      <div><input value={this.props.interestRates} className={s.input} onChange={this.changeInterestRates} className={s.input} /></div>
        </div>
        <div className={s.grup_btn}>
          <button onClick={this.isSave} className={s.btn}>save</button>
          <button onClick={this.isClear} className={s.btn}>clear</button>
        </div>
      </div>
      <div className={s.rigth_column}>
        <div className={s.rigth_column__child}>Ежемесячный платеж (в рублях): {!this.state.monthlyPayment ? 'недостаточно данных' : this.state.monthlyPayment}</div>
        <div className={s.rigth_column__child}>Необходимый доход (в рублях): {!this.state.requiredIncome ? 'недостаточно данных' : this.state.requiredIncome}</div>
        <div className={s.rigth_column__child}>Переплата (в рублях): {!this.state.overpayment ? 'недостаточно данных' : this.state.overpayment}</div>
        <div className={s.rigth_column__child}>Тело кредита (в рублях): {!this.state.bodyCredit ? 'недостаточно данных' : this.state.bodyCredit}</div>
      </div>
    </div>
    );
  }
}

let mapStateToProps = (state) => {
  debugger
  return {
    propertyValue: state.credit.propertyValue,
    initialPayment: state.credit.initialPayment,
    creditTerm: state.credit.creditTerm,
    interestRates: state.credit.interestRates,
    persentBoolean: state.credit.persentBoolean,
    persentValue: state.credit.persentValue
  }
}

export default connect(mapStateToProps, {
  changePropertyValue, changeInitialPayment, changeCreditTerm,
  changeInterestRates, isSAVE, isCLEAR, persent, disableRadio

})(CreditContainer);
