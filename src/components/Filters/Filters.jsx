import { Background, Close } from "../../styles/components";
import { Button, DefaultButton } from "../Button/Button_components";
import { Filter, Label, MyFilters, MyForm } from "./Filters_components";

import { useDispatch } from "react-redux";

import { CloseIcon } from "../../assets/CloseIcon";
import { Checkbox } from "../Checkbox/Checkbox";
import { DoubleRangeInput } from "../DoubleRangeInput/DoubleRangeInput";

export const Filters = ({ key, filters, changeFilters, setIsFiltersOpen }) => {
    const dispatch = useDispatch();

    const defaultFilters =
        sessionStorage.getItem("filters") !== "undefined"
            ? JSON.parse(sessionStorage.getItem("filters"))
            : false;

    const handleSubmit = (event) => {
        event.preventDefault();
        let form = new FormData(event.target);
        let types = form.getAll("types");
        // @ts-ignore
        let filtersObject = Object.fromEntries(form.entries());
        delete filtersObject.slider;
        filtersObject.types = types;
        dispatch(changeFilters(filtersObject));
        setIsFiltersOpen(false);
    };

    const removeFilters = () => {
        const newDefaultFilters = defaultFilters;
        delete newDefaultFilters._id;
        newDefaultFilters.types = [];
        dispatch(changeFilters(newDefaultFilters));
        setIsFiltersOpen(false);
    };

    return (
        defaultFilters &&
        filters && (
            <Background onClick={() => setIsFiltersOpen(false)}>
                <MyFilters onClick={(e) => e.stopPropagation()}>
                    <Close onClick={() => setIsFiltersOpen(false)}>
                        <CloseIcon />
                    </Close>
                    <h1>Фильтры</h1>
                    <MyForm onSubmit={handleSubmit}>
                        <Filter>
                            <Label>Тип блюда</Label>
                            <ul>
                                {defaultFilters.types?.map((el, num) => (
                                    <li key={num}>
                                        <Checkbox
                                            label={el}
                                            defaultCheck={filters.types.includes(el)}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </Filter>
                        <Filter>
                            <Label>Время приготовления</Label>
                            <DoubleRangeInput
                                min={{
                                    name: "times_min",
                                    defaultValue: defaultFilters.times_min,
                                    value: filters.times.min
                                }}
                                max={{
                                    name: "times_max",
                                    defaultValue: defaultFilters.times_max,
                                    value: filters.times.max
                                }}
                            />
                        </Filter>
                        <Filter>
                            <Label>Кол-во калорий</Label>
                            <DoubleRangeInput
                                min={{
                                    name: "cals_min",
                                    defaultValue: defaultFilters.cals_min,
                                    value: filters.cals.min
                                }}
                                max={{
                                    name: "cals_max",
                                    defaultValue: defaultFilters.cals_max,
                                    value: filters.cals.max
                                }}
                            />
                        </Filter>
                        <DefaultButton type="button" onClick={removeFilters}>
                            Очистить
                        </DefaultButton>
                        <Button type="submit">Применить</Button>
                    </MyForm>
                </MyFilters>
            </Background>
        )
    );
};
