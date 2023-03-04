// У вас есть массив из строк, чисел и иных примитивов. Необходимо создать новый
// массив, заполненный только числами первоначального массива

const arr = ['q', 'w', 'e', 'r', 't', 1, 2, 3, 4, 5, false, true, NaN, null, undefined];
let newArr = [];

for (let i = 0; i < arr.length; i++) {
    console.log(typeof (arr[i]));
    if (typeof (arr[i]) === 'number') {
        newArr.push(arr[i])
    }
}
console.log(newArr);