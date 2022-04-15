const products = [];

export const getProductsreducer = (state={products},action)=>{
    switch(action.type){
        case "SUCESS GET_PRODUCTS" :
            return {products:action.payload}

            case   "FAIL TO GET_PRODUCTS" :
                return {products:action.payload}
        default :return state
    }
}