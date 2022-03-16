import React from "react";

const reactChildrenTaskSolution = ({ children }) => {
    return React.Children.map(children, (child) => {
        return child;
    });
};

export default reactChildrenTaskSolution;
