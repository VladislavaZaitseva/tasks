// Реализуйте класс ServerDelete. Обязательными функциями считаются функции
// middleware, controller, service, repository. Цепочка взаимодействия между методами
// следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
// этим массивом осуществляется только в repository. Массив находится в приложении
// Задание:
// на вход подается JSON вида:
// `{
// "id": "javascript"
// }`
// Необходимо осуществить удаление по id. Если совпадения нет – ошибка. Добавить
// проверки 

class ServerDelete {
    constructor(obj) {
        this.obj = obj;
    }

    controller() {
        try {
            const contr = this.service()

            return contr
        } catch (error) {
            return error.message
        }

    }

    service() {
        const serv = this.repository()

        return serv
    }

    repository() {
        const array = [
            { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
            { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
            { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
            { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
            { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 }
        ]

        const filtered = array.filter((el) => el.id !== this.obj.id)

        if (filtered.length === array.length) { throw new Error(`нет совпадений по ID нет`) }

        return filtered
    }
}

const obj = JSON.parse(`{"id": "javascript"}`);
console.log(obj);

const serverDelete = new ServerDelete(obj);
const response = serverDelete.controller();
console.log(response);