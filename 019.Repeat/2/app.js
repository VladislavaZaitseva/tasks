// Реализовать строку, в которую 5 раз будет конкатенироваться новое значение
// prompt (где значение число)

let res = '';

for (let i = 0; i < 5; i++) {

    let newValye = prompt();
    if (!isNaN(newValye)) {
        res += newValye
    }
}

console.log(res);