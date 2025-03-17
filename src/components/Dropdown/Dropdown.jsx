import { DefaultButton } from "../Button/Button_components";
import { DropdownList, Main } from "./Dropdown_components";

import React, { useEffect, useRef, useState } from "react";

import { RadioGroup } from "../RadioGroup/RadioGroup";

export const Dropdown = ({ children, options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleButtonClick = () => {
        setIsOpen(!isOpen);
    };

    const handleRadioChange = (value) => {
        console.log("Выбрано:", value);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <Main ref={dropdownRef}>
            <DefaultButton onClick={handleButtonClick}>{children}</DefaultButton>

            {isOpen && (
                <DropdownList>
                    <RadioGroup options={options} name="radio-group" onChange={handleRadioChange} />
                </DropdownList>
            )}
        </Main>
    );
};
