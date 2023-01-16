// Ввести строку. Если эта равна “hschool”, вывести true. В противном случае false.
// Добавить проверки для строк. Удалить лишние пробелы

const str = prompt('введите строку').trim().toLowerCase;

if(isNaN(str)){
    console.log(str==="hschool" ? true : false);
} else{
    console.log('error');
}
