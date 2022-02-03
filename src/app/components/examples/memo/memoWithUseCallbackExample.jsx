import React from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
    return <button className="btn btn-primary" onClick={onLogOut}></button>;
};

LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};

const MemoWithUseCallbackExample = (props) => {
    return null;
};

export default MemoWithUseCallbackExample;
