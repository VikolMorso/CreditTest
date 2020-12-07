import React from 'react';
import s from './credit.module.css';

export const Credit = (props) => {
  debugger
  return (
    (<div className={s.body}>

      <div className={s.left_column}>
        <div className={s.left_column__child}>
          Стоимость недвжмости (в рублях)
      <div>
            <input value={props.propertyValue} className={s.input} onChange={props.changePropertyValue} className={s.input} />
          </div>
        </div>
        <div className={s.left_column__child}>
          Первоначальный взнос (в рублях)
      <div>
            <input value={props.initialPayment} className={s.input} onChange={props.changeInitialPayment} className={s.input} />
          </div>
          <form>
            <input type='checkbox' name='radiobtn' checked={props.state.form.rbtn1} onChange={props.tenPercent} value='10' />10%
          <input type='checkbox' name='radiobtn' checked={props.state.form.rbtn2} onChange={props.fifteenPercent} value='15' />15%
          <input type='checkbox' name='radiobtn' checked={props.state.form.rbtn3} onChange={props.twentyPercent} value='20' />20%
          <input type='checkbox' name='radiobtn' checked={props.state.form.rbtn4} onChange={props.twentyFivePercent} value='25' />25%
          <input type='checkbox' name='radiobtn' checked={props.state.form.rbtn5} onChange={props.thirtyPercent} value='30' />30%
          </form>
          <button onClick={props.DisableRadio} className={s.btn}>убрать</button>

        </div>
        <div className={s.left_column__child}>
          Срок кредита (лет)
      <div><input value={props.creditTerm} className={s.input} onChange={props.changeCreditTerm} className={s.input} /></div>
        </div>
        <div className={s.left_column__child}>
          Процентная ставка (%)
      <div><input value={props.interestRates} className={s.input} onChange={props.changeInterestRates} className={s.input} /></div>
        </div>
        <div className={s.grup_btn}>
          <button onClick={props.isSave} className={s.btn}>save</button>
          <button onClick={props.isClear} className={s.btn}>clear</button>
        </div>
      </div>
      <div className={s.rigth_column}>
        <div className={s.rigth_column__child}>Ежемесячный платеж (в рублях): {!props.state.monthlyPayment ? 'недостаточно данных' : props.state.monthlyPayment}</div>
        <div className={s.rigth_column__child}>Необходимый доход (в рублях): {!props.state.requiredIncome ? 'недостаточно данных' : props.state.requiredIncome}</div>
        <div className={s.rigth_column__child}>Переплата (в рублях): {!props.state.overpayment ? 'недостаточно данных' : props.state.overpayment}</div>
        <div className={s.rigth_column__child}>Тело кредита (в рублях): {!props.state.bodyCredit ? 'недостаточно данных' : props.state.bodyCredit}</div>
      </div>
    </div>
    ))
}
  

