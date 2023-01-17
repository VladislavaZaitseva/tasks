// Задача на слово палиндром. Если слово одинаковое с 2 сторон, то true, в
// противном случае false
// мем -> true
// тест -> false

const word = 'anna'.toLowerCase();
const reverseWord = word.split().reverse();
if(word=== reverseWord){
    console.log(true);
}else (false)