import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    return (
        <div>
            {isAuth ? (
                <button
                    className="btn btn-danger mt-3"
                    onClick={onLogOut}
                    style={{ width: "80px" }}
                >
                    Logout
                </button>
            ) : (
                <button
                    className="btn btn-primary mt-3"
                    onClick={onLogin}
                    style={{ width: "80px" }}
                >
                    Login
                </button>
            )}
        </div>
    );
};

SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.bool
};

export default SimpleComponent;
