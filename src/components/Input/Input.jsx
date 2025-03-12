import { ErrorMessage, Field } from "formik";

import * as S from "./Input_components.js";

export const Input = ({ label, name, type, placeholder = "", readOnly = false, mask }) => {
    return (
        <Field name={name}>
            {(formikField) => (
                <S.Container>
                    <S.Label htmlFor={name}>{label}</S.Label>
                    <S.Input
                        type={type}
                        id={name}
                        placeholder={placeholder}
                        readOnly={readOnly}
                        mask={mask}
                        {...formikField.field}
                    />
                    <ErrorMessage name={name}>
                        {(errorMessage) => <S.Error>{errorMessage}</S.Error>}
                    </ErrorMessage>
                </S.Container>
            )}
        </Field>
    );
};
