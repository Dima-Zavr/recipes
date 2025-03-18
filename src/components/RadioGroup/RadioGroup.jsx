import { Label, MyRadio } from "./RadioGroup_components";

import React, { useState } from "react";

export const RadioGroup = ({ options, name, defaultValue, onChange }) => {
    const [selectedValue, setSelectedValue] = useState(defaultValue);

    const handleChange = (event) => {
        const value = event.target.value;
        let element = {};
        options.forEach((el) => {
            if (el.value === value) {
                element = el;
            }
        });
        setSelectedValue(value);
        onChange(element);
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
