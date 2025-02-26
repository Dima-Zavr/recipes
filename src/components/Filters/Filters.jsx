import { Container, Filter, Label, MyForm } from "./Filters_components"
import { Button, DefaultButton } from "../Button/Button_components"
import { DoubleRangeInput } from "../DoubleRangeInput/DoubleRangeInput.jsx"
import { useDispatch } from "react-redux"

export const Filters = ({ data, deleteRecipes }) => {
    const dispatch = useDispatch()

    console.log(data.filters)

    const handleSubmit = (event) => {
        event.preventDefault()
        let data = new FormData(event.target)
        let formObject = Object.fromEntries(data.entries())
        delete formObject.slider
        dispatch(deleteRecipes(""))
    }

    return (
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
                            defaultValue: 0
                        }}
                        max={{
                            name: "time_max",
                            defaultValue: 120
                        }}
                    />
                </Filter>
                <Filter>
                    <Label>Кол-во калорий</Label>
                    <DoubleRangeInput
                        min={{
                            name: "cal_min",
                            defaultValue: 0
                        }}
                        max={{
                            name: "cal_max",
                            defaultValue: 1000
                        }}
                    />
                </Filter>
                <DefaultButton onClick={() => {}}>Очистить</DefaultButton>
                <Button type="submit">Применить</Button>
            </MyForm>
        </Container>
    )
}
