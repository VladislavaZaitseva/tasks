// Работа с замыканием. Необходимо реализовать конкатенацию строк при каждом
// последующем вызове функции

function doStr() {
    let str = '';
    return function (a) {
        str += a_;
        console.log(str);
    }
}
const result = doStr();
result(a)
result(b)
result(c)
result(d)
result(e)