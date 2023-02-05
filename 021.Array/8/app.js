// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Если все элементы массива – числа, то вывести логическое
// true, в противном случае false. Every, forEach

const n = 3;
let arr = [];

for (let i = 0; i < n; i++) {
    arr.push(prompt(''));
}

// const result = arr.every(function(elem){
//     if(!isNaN(elem)) {
//         return true
//     } else{
//         return false
//     }
// }) console.log(result);

arr.forEach(function (elem) {
    if (!isNaN(elem)) {
        return true
    } else {
        return false
    }
})