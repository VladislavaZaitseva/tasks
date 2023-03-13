// На входе объект и число n, символизирующее количество пар ключ-значение.
// Ключи и значения - автоинкремент (генерируется автоматически от 1 до n).
// Проверить есть ли ключ 10 в объекте. 

const obj = {};
const n = 12;

function doObject(obj_, n_) {
    for (let i = 0; i < n_; i++) {
        obj_[i] = i;
    }
    return obj
}

function main(doObject_) {
    try {
       if(!Object.keys(doObject_).includes('10')) throw new Error('')
       return true
    } catch (error) {
        return error.message;
    }
}

const res = doObject(obj, n);
const result = main(doObject);
console.log(result);