import React, { useState, useEffect, useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withoutCallback = useRef(0);
    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    const validateWithoutCallback = (data) => {
        console.log(data);
    };
    useEffect(() => {
        validateWithoutCallback(data);
    }, [data]);
    useEffect(() => {
        withoutCallback.current++;
    }, [validateWithoutCallback]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render withoutCallback: {withoutCallback.current}</p>
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                onChange={handleChange}
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={data.email || ""}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
