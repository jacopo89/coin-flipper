import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {flipCoin} from "./redux/reducer";

export function CoinFlipper(){
    const {coin} = useSelector(state=>state);
    const dispatch = useDispatch();

    const dispatcher = ()=>dispatch(flipCoin())

    return <>
        <div>coin is {coin.toString()}</div>
        <button onClick={dispatcher}>FLIP COIN</button>
        </>
}