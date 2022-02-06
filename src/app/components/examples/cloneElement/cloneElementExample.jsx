import React from "react";
import CardWrapper from "../../common/Card";
import TextField from "../../common/form/textField";

import SmallTitle from "../../common/typografy/smallTitle";
const CloneElementExample = () => {
    const field = <TextField name="email" label="email" />;

    const handleChange = (target) => {
        console.log("change", target);
    };
    return (
        <CardWrapper>
            <SmallTitle>Пример</SmallTitle>
            {/* Its only for reading, thats why we need to craete the clon of field!  */}
            {field}
            {React.cloneElement(field, {
                onChange: handleChange,
                label: "Cloned email"
            })}
        </CardWrapper>
    );
};

export default CloneElementExample;
