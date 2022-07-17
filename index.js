import { useState } from "react";
/**
 * Repeats the behavior of `useState` and writes all changes to the local storage. If the local
 * storage already contains the `keyName` key, this value will be returned and written to a state.
 * @param {{keyName: string; any;}} initialState The initial state object that should contain
 * `keyName` field.
 * @returns {initialState} The initial state object
 */
export const useLocalState = (initialState) => {
    const savedState = localStorage.getItem(initialState.keyName);
    const [state, setState] = useState(savedState ? JSON.parse(savedState) : initialState);
    const writeAndSet = (newState) => {
        const stringState = JSON.stringify(newState);
        localStorage.setItem(initialState.keyName, stringState);
        setState(newState);
    };
    return [state, writeAndSet];
};
