// На вход программе подается строка текста. Напишите программу, которая
// проверяет, что строка заканчивается подстрокой .com или .ru. Если заканчивается,
// то вывести true, в противном случае false

const email = prompt('введите строку');

if (email. endsWith('.com') || email. endsWith ('.ru')) {
    console.log(true);
}else{
    console.log(false);
}

console.log();