import { Filter, Label, MyFilters, MyForm } from "./Filters_components";
import { Button, DefaultButton } from "../Button/Button_components";
import { DoubleRangeInput } from "../DoubleRangeInput/DoubleRangeInput";
import { useDispatch } from "react-redux";
import { Checkbox } from "../Checkbox/Checkbox";
import { Background, Close } from "../../styles/components";
import { CloseIcon } from "../../assets/CloseIcon";

export const Filters = ({ key, filters, changeFilters, setIsFiltersOpen }) => {
    const dispatch = useDispatch();

    const defaultFilters =
        sessionStorage.getItem("filters") !== "undefined"
            ? JSON.parse(sessionStorage.getItem("filters"))
            : false;

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
        } else {
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let form = new FormData(event.target);
        // @ts-ignore
        let filtersObject = Object.fromEntries(form.entries());
        delete filtersObject.slider;
        filtersObject.types = types;
        console.log(filtersObject);
        dispatch(changeFilters(filtersObject));
        setIsFiltersOpen(false);
    };

    const removeFilters = () => {
        const newDefaultFilters = defaultFilters;
        delete newDefaultFilters._id;
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
                                            id={num}
                                            isCheck={!!filters.types[el]}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </Filter>
                        <Filter>
                            <Label>Время приготовления</Label>
                            <DoubleRangeInput
                                min={{
                                    name: "time_min",
                                    defaultValue: defaultFilters.time_min,
                                    value: filters.time_min
                                }}
                                max={{
                                    name: "time_max",
                                    defaultValue: defaultFilters.time_max,
                                    value: filters.time_max
                                }}
                            />
                        </Filter>
                        <Filter>
                            <Label>Кол-во калорий</Label>
                            <DoubleRangeInput
                                min={{
                                    name: "cal_min",
                                    defaultValue: defaultFilters.cal_min,
                                    value: filters.cal_min
                                }}
                                max={{
                                    name: "cal_max",
                                    defaultValue: defaultFilters.cal_max,
                                    value: filters.cal_max
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
