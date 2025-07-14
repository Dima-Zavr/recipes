import * as I from "../Input/Input_components";
import * as AI from "./ArrayInput_components";

import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { ErrorMessage } from "formik";

import { CloseIcon } from "../../assets/CloseIcon";
import { DraggableIcon } from "../../assets/DraggableIcon";

export const ArrayInput = ({ label, name, values = [], setFieldValue, placeholder }) => {
    const [inputValue, setInputValue] = useState("");

    const onDragEnd = (result) => {
        const { destination, source } = result;

        if (!destination) return;

        const newItems = [...values];
        const item = newItems[source.index];
        newItems.splice(source.index, 1);
        newItems.splice(destination.index, 0, item);
        setFieldValue(name, newItems);
    };

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
        values.splice(index, 1);
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

            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="items">
                    {(provided) => (
                        <AI.List {...provided.droppableProps} ref={provided.innerRef}>
                            {values?.map((item, index) => (
                                <Draggable key={index} draggableId={String(index)} index={index}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <AI.Item key={index}>
                                                <AI.Label>
                                                    <DraggableIcon /> {item}
                                                </AI.Label>
                                                <AI.Close onClick={() => handleDeleteItem(index)}>
                                                    <CloseIcon />
                                                </AI.Close>
                                            </AI.Item>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </AI.List>
                    )}
                </Droppable>
            </DragDropContext>
        </I.Container>
    );
};
