import { Container, Filter, Label, MyForm } from "./Filters_components";
import { Button, DefaultButton } from "../Button/Button_components";
import { DoubleRangeInput } from "../DoubleRangeInput/DoubleRangeInput";
import { useDispatch } from "react-redux";

export const Filters = ({ key, filters, changeFilters }) => {
    const dispatch = useDispatch();

    const defaultFilters =
        sessionStorage.getItem("filters") !== "undefined"
            ? JSON.parse(sessionStorage.getItem("filters"))
            : false;

    const handleSubmit = (event) => {
        event.preventDefault();
        let form = new FormData(event.target);
        // @ts-ignore
        let filtersObject = Object.fromEntries(form.entries());
        delete filtersObject.slide;
        dispatch(changeFilters(filtersObject));
    };

    const removeFilters = () => {
        const newDefaultFilters = defaultFilters;
        delete newDefaultFilters._id;
        dispatch(changeFilters(newDefaultFilters));
    };

    return (
        defaultFilters &&
        filters && (
            <Container>
                <MyForm onSubmit={handleSubmit}>
                    <Filter>
                        <Label>Тип блюда</Label>
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
            </Container>
        )
    );
};
