import { Input, Inputs, RangeInput, Slider, SliderTrack } from "./DoubleRangeInput_components";
import { useState } from "react";

export const DoubleRangeInput = ({ min, max }) => {
    const [minValue, setMinValue] = useState(min.value ? min.value : min.defaultValue);
    const [maxValue, setMaxValue] = useState(max.value ? max.value : max.defaultValue);

    const changeMinValue = (event) => {
        if (event.target.value) {
            setMinValue(Number(event.target.value));
            if (Number(event.target.value) > Number(maxValue)) {
                setMinValue(Number(maxValue) - 10);
            }
        } else {
            setMinValue(min.defaultValue);
        }
    };
    const changeMaxValue = (event) => {
        if (event.target.value) {
            setMaxValue(Number(event.target.value));
            if (Number(event.target.value) < Number(minValue)) {
                setMaxValue(Number(minValue) + 10);
            }
        } else {
            setMaxValue(max.defaultValue);
        }
    };
    return (
        <>
            <Inputs>
                <Input
                    label="Мин"
                    type="number"
                    name={min.name}
                    value={minValue}
                    //defaultValue={min.defaultValue}
                    onChange={(event) => setMinValue(event.target.value)}
                    onBlur={changeMinValue}
                />
                <Input
                    label="Макс"
                    type="number"
                    name={max.name}
                    value={maxValue}
                    //defaultValue={max.defaultValue}
                    onChange={(event) => setMaxValue(event.target.value)}
                    onBlur={changeMaxValue}
                />
            </Inputs>
            <Slider>
                <SliderTrack
                    percent1={
                        ((minValue - min.defaultValue) / (max.defaultValue - min.defaultValue)) *
                        100
                    }
                    percent2={
                        ((maxValue - min.defaultValue) / (max.defaultValue - min.defaultValue)) *
                        100
                    }
                />
                <RangeInput
                    type="range"
                    name={`slider`}
                    min={min.defaultValue}
                    max={max.defaultValue}
                    value={minValue}
                    onChange={changeMinValue}
                />
                <RangeInput
                    type="range"
                    name={`slider`}
                    min={min.defaultValue}
                    max={max.defaultValue}
                    value={maxValue}
                    onChange={changeMaxValue}
                />
            </Slider>
        </>
    );
};
