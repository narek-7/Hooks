import React, { useState } from "react";

const withUserLogin = (Component) => (props) => {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("user"));

    const onLogin = () => {
        localStorage.setItem("user", "true");
        setIsAuth(localStorage.getItem("user"));
    };
    const onLogOut = () => {
        localStorage.setItem("user", "");
        setIsAuth(localStorage.getItem("user"));
    };

    return (
        <>
            <Component
                {...props}
                isAuth={isAuth}
                onLogin={onLogin}
                onLogOut={onLogOut}
            />
        </>
    );
};

export default withUserLogin;
