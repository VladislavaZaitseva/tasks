// На входе статичный объект. Необходимо посчитать количество пар (ключ:
// значение) где значение число и вывести количество 

const obj = {
    test_0: 0,
    test_1: 1,
    test_2: 2,
    test_3: 3,
    test_4: 4,
    test_5: 5,
}

let count = 0;

for (let key in obj) {
    if (key && obj[key] || obj[key] == 0) {
        count++
    }
}

console.log(count)