import React, {useContext, useEffect} from "react";
import ShopContext from "../contexts/ShopContext";
import {useHistory} from "react-router-dom";

export interface LoggedInProps extends React.ReactHTML {
}

export const LoggedIn = (props: LoggedInProps) => {
    const {setIsLoggedIn} = useContext(ShopContext)
    const history = useHistory();

    useEffect(() => {
        setIsLoggedIn(true)
        history.push("/");
    }, []);

    return (
        <div></div>
    )
}
