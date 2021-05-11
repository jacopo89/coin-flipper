import { combineReducers } from 'redux';

const initialState = {coin: false};
export function flipCoinReducer(state = initialState, action) {
    switch (action.type) {
        case 'FLIP_COIN':
            return {
                coin: !state.coin
            };

        default:
            return state;
    }
}

export function flipCoin(){
    return {
        type:"FLIP_COIN"
    }
}

export default combineReducers({flipCoinReducer });
