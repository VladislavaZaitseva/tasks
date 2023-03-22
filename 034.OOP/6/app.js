// Реализуйте класс ServerGetAll. Обязательными функциями считаются функции
// controller, service, repository. Цепочка взаимодействия между методами
// следующая:
// controller -> service -> repository, где:
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
// этим массивом осуществляется только в repository. Массив находится в
// приложении
// Задание:
// Необходимо вывести в консоль весь массив

class ServerGetAll {
    controller(clientData) {
        try {
            const data = this.service(clientData);

            return data;
        } catch (error) {
            return error.message;
        }
    }

    service(clientData) {
        const data = this.repository(clientData);
        if (data.length === 0) throw new Error('Нет совпадений')
        return data;
    }

    repository(clientData) {
        const arr = [

            { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
            { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
            { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
            { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
            { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 }
        ];

        const filtered = arr.filter(el => el.id === clientData.id)
        return filtered;
    }
}
const clientData = JSON.parse('{"id":1}')

const serverGetAll = new ServerGetAll()
const response = ServerGetAll.controller(clientData);
console.log(response);
