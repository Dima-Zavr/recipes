import { DefaultButton } from "../../components/Button/Button_components";
import { Buttons, Table } from "../../styles/components";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLoaderData, useNavigate } from "react-router-dom";

import { PageLayout } from "../../components/PageLayout/PageLayout";
import { date } from "../../helpers/date";
import { resetState } from "../../store/actions";

import { ChangeDataModal } from "./ChangeDataModal";
import { ChangePasswordModal } from "./ChangePasswordModal";

export const ProfilePage = () => {
    const user = useLoaderData();
    const nav = useNavigate();
    const dispatch = useDispatch();

    const [isChangeDataOpen, setIsChangeDataOpen] = useState(false);
    const [isChangePassOpen, setIsChangePassOpen] = useState(false);

    const logOut = (event) => {
        event.stopPropagation();
        localStorage.removeItem("accessToken");
        dispatch(resetState());
        nav("/allRecipes");
        location.reload();
    };

    return (
        <PageLayout>
            <h1>Профиль</h1>
            <Table>
                <tbody>
                    <tr>
                        <th>Фамилия</th>
                        <td>{user.lastname}</td>
                    </tr>
                    <tr>
                        <th>Имя</th>
                        <td>{user.firstname}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{user.email}</td>
                    </tr>
                    <tr>
                        <th>Кол-во созданных рецептов</th>
                        <td>{user.created_recipes}</td>
                    </tr>
                    <tr>
                        <th>Кол-во избранных рецептов</th>
                        <td>{user.liked_recipes}</td>
                    </tr>
                    <tr>
                        <th>Дата создания аккаунта</th>
                        <td>{date(user.createdAt)}</td>
                    </tr>
                </tbody>
            </Table>

            <Buttons>
                <DefaultButton onClick={() => setIsChangeDataOpen(true)}>
                    Обновить данные профиля
                </DefaultButton>
                <DefaultButton onClick={() => setIsChangePassOpen(true)}>
                    Изменить пароль
                </DefaultButton>
                <DefaultButton onClick={logOut}>Выйти из аккаунта</DefaultButton>
            </Buttons>

            {isChangeDataOpen && (
                <ChangeDataModal user={user} setIsChangeDataOpen={setIsChangeDataOpen} />
            )}
            {isChangePassOpen && <ChangePasswordModal setIsChangePassOpen={setIsChangePassOpen} />}
        </PageLayout>
    );
};
