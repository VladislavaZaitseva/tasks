// На входе статичный объект. Необходимо посчитать количество пар (ключ: значение)

const obj = {
    name: 'Vlada',
    age: '16',
    country: 'BLR'
}

let result = 0;

for (let key in obj) {
    if (obj[key]) {
        result++;
    }
}
console.log(result);