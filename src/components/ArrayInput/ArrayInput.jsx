import * as I from "../Input/Input_components";
import * as AI from "./ArrayInput_components";

import React, { useState } from "react";
import { ErrorMessage } from "formik";

import { CloseIcon } from "../../assets/CloseIcon";

export const ArrayInput = ({ label, name, values = [], setFieldValue, placeholder }) => {
    const [inputValue, setInputValue] = useState("");

    // Функция для добавления элемента
    const handleAddItem = () => {
        if (inputValue.trim()) {
            setFieldValue(name, [...values, inputValue]);
            setInputValue("");
        }
    };

    // Обработчик нажатия клавиши
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault(); // Предотвращаем стандартное поведение (например, отправку формы)
            handleAddItem(); // Добавляем элемент
        }
    };

    const handleDeleteItem = (index) => {
        console.log(index);
        const newValue = values.splice(index, 1);
        setFieldValue(name, values);
    };

    return (
        <I.Container>
            <I.Label htmlFor={name}>{label}</I.Label>
            <AI.Flex>
                <AI.MyInput
                    type="text"
                    id={name}
                    name={name}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={placeholder}
                />
                <ErrorMessage name={name}>
                    {(errorMessage) => <I.Error>{errorMessage}</I.Error>}
                </ErrorMessage>
                <AI.AddButton type="button" onClick={handleAddItem} style={{ marginLeft: "10px" }}>
                    Добавить
                </AI.AddButton>
            </AI.Flex>

            <AI.List>
                {values?.map((item, index) => (
                    <AI.Item key={index}>
                        <li>
                            {index + 1}. {item}
                        </li>
                        <AI.Close onClick={() => handleDeleteItem(index)}>
                            <CloseIcon />
                        </AI.Close>
                    </AI.Item>
                ))}
            </AI.List>
        </I.Container>
    );
};
