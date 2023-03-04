//Дано число 7, найдите все числа кратные 7 до 100

const num = 7;

for (let i = 0; i <= 100; i++) {
    if (i % num == 0) {
        console.log(i);
    }
}