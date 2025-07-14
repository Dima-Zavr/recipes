import { getCookie, setCookie } from "../helpers/cookie";

import { BASE_URL } from "./api";

export async function refreshAccessToken() {
    try {
        // Получаем refresh token из cookies
        const refreshToken = getCookie("refreshToken");

        if (!refreshToken) {
            localStorage.removeItem("accessToken");
            throw new Error("Refresh token отсутствует");
        }

        // Отправляем запрос на обновление токенов
        const response = await fetch(BASE_URL + "/auth/update_token", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ refreshToken })
        });

        const data = await response.json();

        if (!data.accessToken) {
            throw new Error("Не удалось обновить access token");
        }

        // Сохраняем новый access token и refresh token
        localStorage.setItem("accessToken", data.accessToken);
        setCookie("refreshToken", data.refreshToken, 14);

        // Возвращаем новый access token
        return data.accessToken;
    } catch (error) {
        console.error("Ошибка при обновлении токена: ", error);
        throw error;
    }
}
