// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо создать новый массив из элементов, каждое
// значение которого имеет вид #name. map, forEach
// [“hschool”, “company”] -> [“#hschool”, “#company”]

const n = 3;
let arr = [];

for (let i = 0; i < n; i++) {
    arr.push(prompt());
}

let newArr = arr.map(function (el) {
    return '# ${el}'
})

console.log(newArr);