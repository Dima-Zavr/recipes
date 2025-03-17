import { Label, MyRadio } from "./RadioGroup_components";

import React, { useState } from "react";

export const RadioGroup = ({ options, name, onChange }) => {
    const [selectedValue, setSelectedValue] = useState("");

    const handleChange = (event) => {
        const value = event.target.value;
        setSelectedValue(value);
        onChange(value);
    };

    return (
        <div>
            {options.map((option) => (
                <Label key={option.value}>
                    <MyRadio
                        type="radio"
                        name={name}
                        value={option.value}
                        checked={selectedValue === option.value}
                        onChange={handleChange}
                    />
                    {option.label}
                </Label>
            ))}
        </div>
    );
};
