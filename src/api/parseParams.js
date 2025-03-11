export const parseParams = (url, params) => {
    // Создаем объект URLSearchParams и добавляем в него фильтры
    const queryParams = new URLSearchParams();

    // Рекурсивно обходим объект фильтров
    const appendFilters = (params, prefix = "") => {
        for (const [key, value] of Object.entries(params)) {
            const fullKey = prefix ? `${prefix}[${key}]` : key;

            if (typeof value === "object" && !Array.isArray(value) && value !== null) {
                // Если значение — объект, рекурсивно обрабатываем его
                appendFilters(value, fullKey);
            } else if (Array.isArray(value)) {
                // Если значение — массив, добавляем каждый элемент отдельно
                value.forEach((item, index) => {
                    queryParams.append(`${fullKey}[${index}]`, item);
                });
            } else {
                // Если значение — примитив, добавляем его как query-параметр
                queryParams.append(fullKey, value);
            }
        }
    };

    // Добавляем фильтры в queryParams
    appendFilters(params);

    // Формируем полный URL
    const queryString = queryParams.toString();
    return queryString ? `${url}?${queryString}` : url;
};
