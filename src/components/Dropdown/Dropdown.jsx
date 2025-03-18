import { DefaultButton } from "../Button/Button_components";
import { DropdownList, Main } from "./Dropdown_components";

import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { SortIcon } from "../../assets/SortIcon";
import { RadioGroup } from "../RadioGroup/RadioGroup";

export const Dropdown = ({ options, defaultSort, changeSort }) => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [selectedLabel, setSelectedLabel] = useState(() => {
        let label = "";
        options.forEach((el) => {
            if (el.value === defaultSort) {
                label = el.label;
            }
        });
        if (label !== "") {
            return label;
        } else {
            return options[0].label;
        }
    });

    const handleButtonClick = () => {
        setIsOpen(!isOpen);
    };

    const handleRadioChange = (element) => {
        setSelectedLabel(element.label);
        dispatch(changeSort(element.value));
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
            <DefaultButton onClick={handleButtonClick}>
                <SortIcon />
                {selectedLabel}
            </DefaultButton>

            {isOpen && (
                <DropdownList>
                    <RadioGroup
                        options={options}
                        name="radio-group"
                        defaultValue={defaultSort}
                        onChange={handleRadioChange}
                    />
                </DropdownList>
            )}
        </Main>
    );
};
