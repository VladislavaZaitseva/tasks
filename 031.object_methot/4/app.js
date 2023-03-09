// На входе объект. Ключи и значения - автоинкремент (генерируется автоматически
//     от 1 до n). Написать функцию на поиск в объекте только четных ключей. 

const obj = {};

function doObject(obj_) {
    for (let i = 0; i < 5; i++) {
        obj_[i] = i;
    }
}

function findChetKeys(newObj_) {
    try {
        const arr = Object.keys(newObj_);

        const chetKeys = arr.filter(function (el) {
            if (el % 2 === 0) {
                return true
            }
            return chetKeys
        })
    } catch(error) {
        return error.message;
    }
}

const newObj = doObject(obj);
const result = findChetKeys(newObj);
console.log(result);