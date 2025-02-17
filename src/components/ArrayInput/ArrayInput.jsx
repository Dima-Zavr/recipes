import React, { useState } from "react"
import * as I from "../Input/Input_components"
import * as AI from "./ArrayInput_components"
import { ErrorMessage } from "formik"

export const ArrayInput = ({ label, name, values = [], setFieldValue, placeholder }) => {
    const [inputValue, setInputValue] = useState("")

    //console.log(`Values for ${name}:`, values); // Проверка значений

    // Функция для добавления элемента
    const handleAddItem = () => {
        if (inputValue.trim()) {
            setFieldValue(name, [...values, inputValue])
            setInputValue("")
        }
    }

    // Обработчик нажатия клавиши
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault() // Предотвращаем стандартное поведение (например, отправку формы)
            handleAddItem() // Добавляем элемент
        }
    }

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

            <ul>
                {values?.map((item, index) => (
                    <li key={index}>
                        {index + 1}. {item}
                    </li>
                ))}
            </ul>
        </I.Container>
    )
}
