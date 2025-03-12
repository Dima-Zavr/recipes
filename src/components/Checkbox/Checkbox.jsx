import { Label, MyCheckbox } from "./Checkbox_components";

import { useState } from "react";

export const Checkbox = ({ label, defaultCheck }) => {
    const [isCheck, setIsCheck] = useState(defaultCheck);
    return (
        <Label>
            <MyCheckbox
                type="checkbox"
                onChange={() => setIsCheck(!isCheck)}
                name="types"
                value={label}
                checked={isCheck}
            />
            {label}
        </Label>
    );
};
