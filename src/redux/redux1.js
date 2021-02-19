import {createStore} from 'redux';
import {combineReducers} from 'redux';


//Action
const INCREMENTAR = 'INCREMENTAR';
const DECREMENTAR = 'DECREMENTAR';

//Function dipach actions
export const incrementar = (cant)=>{
    return {
        type: INCREMENTAR,
        payload:cant
    }
}

export const decrementar = (cant)=>{
    return {
        type:DECREMENTAR,
        payload:cant
    }
}
//Reducer
const initialState = {
    contador:25,
}
function numReducer(state = initialState, action){
    switch(action.type){
        case INCREMENTAR:
            return {
                ...state,
                contador: state.contador - action.payload
            }
        case DECREMENTAR:
            return{
                ...state,
                contador: state.contador + action.payload
            }
        default: return state
    }
}

//CombineReducer
const combinaReductores = combineReducers({numReducer})

//Store
const store = createStore(
    combinaReductores,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;

