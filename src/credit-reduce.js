let initialState = {
    propertyValue:'0',
    initialPayment: '0',
    creditTerm: '0',
    interestRates: '0',
    persentBoolean: false,
    persentValue: null
}
const CreditReduce = (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_PROPERTY_VALUE: {
            if (action.propertyValue.length<1) return {...state, propertyValue: ''}
            let value = action.propertyValue.replace(/[\s.,]+/g, '');
            debugger
            return {
                ...state,
                propertyValue:  Number.parseInt(value).toLocaleString()
            };
        }
        case CHANGE_INITIAL_PAYMENT: {
            if (action.initialPayment.length<1) return {...state, initialPayment: ''}
            let value = action.initialPayment.replace(/[\s.,]+/g, '');
            return {
                ...state,
                initialPayment:  Number.parseInt(value).toLocaleString()
            };
        }
        case CHANGE_CREDIT_TERM: {
            if (action.creditTerm.length<1) return {...state, creditTerm: ''}
            let value = action.creditTerm.replace(/[\s.,]+/g, '');
            return {
                ...state,
                creditTerm: Number.parseInt(value).toLocaleString()
            };
        }
        case CHANGE_INTEREST_RATES: {
            if (action.interestRates.length<1) return {...state, interestRates: ''}
            let value = action.interestRates.replace(/[\s.,]+/g, '');
            return {
                ...state,
                interestRates:  Number.parseInt(value).toLocaleString()
            };
        }
        case SAVE: {

            return {
                ...state,
                propertyValue: action.propertyValue,
                initialPayment:action.initialPayment,
                creditTerm:action.creditTerm,
                interestRates:action.interestRates
            };
        }
        case CLEAR: {
            
            return {
                ...state,
                propertyValue: '',
                initialPayment:'',
                creditTerm:'',
                interestRates:'',
            };
        }

        case PERSENT: {
            let k = +action.value/100*(Number.parseInt(state.propertyValue.replace(/[\s.,]+/g, '')))
            
            return {
                ...state,
                initialPayment: Number.parseInt(k).toLocaleString(),
                persentBoolean: true,
                persentValue: action.value
            }
        }
        case DISABLERADIO: {
            debugger
            return {
                ...state,
                persentBoolean: false,
                persentValue: null
            }
        }

        default:
            return state;
    }
}
const CHANGE_PROPERTY_VALUE = 'CHANGE_PROPERTY_VALUE'
const CHANGE_INITIAL_PAYMENT = 'CHANGE_INITIAL_PAYMENT'
const CHANGE_CREDIT_TERM = 'CHANGE_CREDIT_TERM'
const CHANGE_INTEREST_RATES = 'CHANGE_INTEREST_RATES'
const SAVE = 'SAVE'
const CLEAR = 'CLEAR'
const PERSENT = 'PERSENT'
const DISABLERADIO = 'DISABLERADIO'

export const changePropertyValue = (propertyValue) => ({
    type: CHANGE_PROPERTY_VALUE, propertyValue
})
export const changeInitialPayment = (initialPayment) => ({
    type: CHANGE_INITIAL_PAYMENT, initialPayment
})
export const changeCreditTerm = (creditTerm) => ({
    type: CHANGE_CREDIT_TERM, creditTerm
})
export const changeInterestRates = (interestRates) => ({
    type: CHANGE_INTEREST_RATES, interestRates
})
export const isSAVE = (propertyValue,initialPayment,creditTerm,interestRates) => ({
    type: SAVE, propertyValue,initialPayment,creditTerm,interestRates
})
export const isCLEAR = () => ({
    type: CLEAR, 
})
 
export const persent=(value)=>({
    type: PERSENT, value
})

export const disableRadio=()=>({
    type: DISABLERADIO
})

export default CreditReduce; 