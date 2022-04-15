import {getProductsreducer} from './productreducer'

import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    getProductsData:getProductsreducer
});

export default rootReducer; 