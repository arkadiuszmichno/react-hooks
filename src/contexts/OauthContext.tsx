import React, {useState} from "react";
import {IOauthContextState} from "../interface";

const defaultValue: IOauthContextState = {
    isLoggedIn: false,
    setIsLoggedIn: () => {
    }
}

export const OauthContext = React.createContext(defaultValue);

export const OauthContextProvider: React.FC = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const providerValue: IOauthContextState = {
        isLoggedIn,
        setIsLoggedIn
    }

    return (
        <OauthContext.Provider value={providerValue}>{children}</OauthContext.Provider>
    );
};

export default OauthContext;
