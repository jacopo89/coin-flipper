export function flipCoinReducer(state: {
    coin: boolean;
} | undefined, action: any): {
    coin: boolean;
};
export function flipCoin(): {
    type: string;
};
declare var _default: import("redux").Reducer<import("redux").CombinedState<{
    flipCoinReducer: {
        coin: boolean;
    };
}>, import("redux").AnyAction>;
export default _default;
