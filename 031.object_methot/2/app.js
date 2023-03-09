// Написать функцию на подсчет количества пар ключ значение в объекте. Добавить
// проверки 

const obj = {
    id: 1,
    name: "qwert@gmail",
    Hi: 1,
}

const foundCount = (obj_) => {
    try {
        const result = Object.entries(obj_).length;
        if(result ==0) throw new Error('');

        return result.length;

    } catch (error) {
        console.log(error.message);
    }
}

const res = foundCount(obj);
console.log(res);