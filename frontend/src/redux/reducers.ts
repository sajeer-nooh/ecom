import { MERCHANT_STORE_NAME, CUSTOMER_STORE_NAME } from './constants';
import { reducer as merchantReducer } from '../modules/merchant/data/merchantReducer';
import { reducer as customerReducer } from "../modules/customer/data/customerReducer";

const rootReducer = {
  [MERCHANT_STORE_NAME]: merchantReducer,
  [CUSTOMER_STORE_NAME]: customerReducer,
}


export default rootReducer;