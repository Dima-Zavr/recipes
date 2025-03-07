import { Label, MyCheckbox } from "./Checkbox_components";
import { useState } from "react";

export const Checkbox = ({ label, defaultCheck, handleCheckbox }) => {
    const [isCheck, setIsCheck] = useState(defaultCheck);
    return (
        <Label>
            <MyCheckbox
                type="checkbox"
                onChange={handleCheckbox}
                name={label}
                value={label}
                checked={isCheck}
            />
            {label}
        </Label>
    );
};
