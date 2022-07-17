import React from "react";
export interface I_LocalInitialState {
    keyName: string;
}
export declare const useLocalState: <S extends I_LocalInitialState>(initialState: S) => [S, React.Dispatch<React.SetStateAction<S>>];
