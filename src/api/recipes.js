export const baseUrl = "http://localhost:3001"

//Метод GET берёт данные с бекэнда
export async function GET(path, params = {},  token = null) {
    try{
        // Создание URL с параметрами
        const urlWithParams = new URL(baseUrl + path);
        Object.keys(params).forEach(key => urlWithParams.searchParams.append(key, params[key]));

        //Создание токена зарегистрированного пользователя
        const headers = {'Content-Type': 'application/json'};
        if (token) {headers['Authorization'] = `Bearer ${token}`}

        // Выполнение GET-запроса
        const response = await fetch(urlWithParams, {
            method: 'GET',
            headers: headers
        })

        // Преобразование ответа в JSON
        return await response.json();
    }
    catch(error) {
        console.error("Fetch error: ", error)
        throw error;
    }
}

//Метод POST добавляет даные на бекэнд
export async function POST(path, params = {}, element= {}, token = null) {
    try{
        // Создание URL с параметрами
        const urlWithParams = new URL(baseUrl + path);
        Object.keys(params).forEach(key => urlWithParams.searchParams.append(key, params[key]));

        //Создание токена зарегистрированного пользователя
        const headers = {'Content-Type': 'application/json'};
        if (token) {headers['Authorization'] = `Bearer ${token}`}

        // Выполнение POST-запроса
        const response = await fetch(urlWithParams, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(element)
        })

        // Преобразование ответа в JSON
        return await response.json();
    }
    catch(error) {
        console.error("Fetch error: ", error)
        throw error;
    }
}

// Метод PUT обновляет данные на бекэнде
export async function PUT(path, params = {}, element = {}, token = null) {
    try{
        // Создание URL с параметрами
        const urlWithParams = new URL(baseUrl + path);
        Object.keys(params).forEach(key => urlWithParams.searchParams.append(key, params[key]));

        //Создание токена зарегистрированного пользователя
        const headers = {'Content-Type': 'application/json'};
        if (token) {headers['Authorization'] = `Bearer ${token}`}

        // Выполнение PUT-запроса
        const response = await fetch(urlWithParams, {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify(element)
        })

        // Преобразование ответа в JSON
        return await response.json();
    }
    catch(error) {
        console.error("Fetch error: ", error)
        throw error;
    }
}

//Метод PATCH обновляет конкретное поле элемента
export async function PATCH(path, params = {}, element = {}, token = null) {
    try{
        // Создание URL с параметрами
        const urlWithParams = new URL(baseUrl + path);
        Object.keys(params).forEach(key => urlWithParams.searchParams.append(key, params[key]));

        //Создание токена зарегистрированного пользователя
        const headers = {'Content-Type': 'application/json'};
        if (token) {headers['Authorization'] = `Bearer ${token}`}

        // Выполнение PATCH-запроса
        const response = await fetch(urlWithParams, {
            method: 'PATCH',
            headers: headers,
            body: JSON.stringify(element)
        })

        // Преобразование ответа в JSON
        return await response.json();
    }
    catch(error) {
        console.error("Fetch error: ", error)
        throw error;
    }
}

//Метод DELETE удаляет данные с бекэнда
export async function DELETE (path, params = {}, token = null) {
    try{
        // Создание URL с параметрами
        const urlWithParams = new URL(baseUrl + path);
        Object.keys(params).forEach(key => urlWithParams.searchParams.append(key, params[key]));

        //Создание токена зарегистрированного пользователя
        const headers = {'Content-Type': 'application/json'};
        if (token) {headers['Authorization'] = `Bearer ${token}`}

        // Выполнение DELETE-запроса
        const response = await fetch(urlWithParams, {
            method: 'DELETE',
            headers: headers,
        })

        // Преобразование ответа в JSON
        return await response.json();
    }
    catch(error) {
        console.error("Fetch error: ", error)
        throw error;
    }
}