import RootNavigator from "../../route/rootNavigator";

export const navReducer = (state, action)=>{
    let nextState = RootNavigator.router.getStateForAction(action, state);
    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
};