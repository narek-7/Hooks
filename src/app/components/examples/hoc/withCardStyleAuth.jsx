import React from "react";

const withCardStyleAuth = (Component) => (props) => {
    // const isAuth = localStorage.getItem("user");
    return (
        <div className="card text-left p-3">
            <h5 className="card-header p-3">Решение</h5>
            <Component {...props} />
        </div>
    );
};

export default withCardStyleAuth;
