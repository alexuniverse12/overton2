
import React, { createContext, useContext, useReducer } from "react";

import { reducer, AppReducerActionType, getInitialState, initialAppState } from "../state/mainReducer";
import { AppModelType } from "../Model"

const appModelContext = createContext<{ appModel: AppModelType, dispatch: React.Dispatch<AppReducerActionType> }>({
    appModel: getInitialState(),
    dispatch: () => { }
});

export const AppModelProvider = ({ children }: React.PropsWithChildren) => {
    const [appModel, dispatch] = useReducer(reducer, initialAppState);
    return <appModelContext.Provider value={{ appModel, dispatch }}>{children}</appModelContext.Provider>;
}

export default function useAppModel() {
    return useContext(appModelContext);
} 