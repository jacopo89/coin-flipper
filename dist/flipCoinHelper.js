import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useDispatch, useSelector } from "react-redux";
import { flipCoin } from "./redux/reducer";
export function CoinFlipper() {
    const { coin } = useSelector(state => state);
    const dispatch = useDispatch();
    const dispatcher = () => dispatch(flipCoin());
    return _jsxs(_Fragment, { children: [_jsxs("div", { children: ["coin is ", coin.toString()] }, void 0),
            _jsx("button", Object.assign({ onClick: dispatcher }, { children: "FLIP COIN" }), void 0)] }, void 0);
}
