import {useState} from "react";

function useOath() {
    const [isLoggedIn, setLoggedIn] = useState(false);

    function logIn() {
        setLoggedIn(true)
    }

    function logOut() {
        setLoggedIn(true)
    }

    return {
        isLoggedIn,
        logIn,
        logOut
    }
}

export default useOath;
