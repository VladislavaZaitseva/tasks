// На входе статичный объект и строка str. Написать функцию на поиск в объекте
// значения str. Values 

const obj = {
    id: 1,
    name: "qwert@gmail",
    Hi: 1,
};

const str = 123;

function findStr(obj_, str_) {
    try {
        const arr = Object.values(obj_);
        if (!arr.includes(str)) throw new Error('у вас нет совпадений');

        return true
    } catch (error) {
        return error.message;
    }
}

const res = findStr(obj, str);
console.log(res);