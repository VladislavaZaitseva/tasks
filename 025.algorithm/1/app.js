// 1. Реализуйте функцию searchBinary, которая принимает 2 параметра: значение 3 и
// массив [1, 2, 3, 4, 5]. Функция возвращает индекс, где значение встречается в
// массиве, если найдено. Если значение не найдено, возвращается сообщение об
// ошибке. 

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const num = 9;


function searchBinary(arr_, num_) {
    let start = 0;
    let end = arr_.length;
    let count = 0;

    for (let i = start; i < end; i++) {

        let middle = Math.round((start + end) / 2);
        count++

        if (arr_[middle] == num_) {
            console.log(`угадал! ваш индекс: ${middle}`);
            break;
        } else if (num_ > arr_[middle]) {
            start = middle;
        } else if (num_ < arr_[middle]) {
            end = middle;
        }

    }

    console.log(count);

}


searchBinary(arr, num)