import { BUY_CAKE } from "./cakeConstants";

const initialState = {
    numberofcakes:10
}


 const reducer = (state=initialState,action)=>{
    switch (action.type) {
        case BUY_CAKE:
            return {
                numberofcakes: state.numberofcakes - 1
            }
        
    
        default:
            return state;
    }
}

export default reducer;