// На входе строка. Необходимо создать функцию, возвращающую true, если это
// слово анаграмма и false в противном случае

const str = 'konys'.split('').sort();
const str2 = 'sykno'.split('').sort();

function isAnnagramma(str_, str2_) {
    return str_.join('') == str2_.join('') ? true : false;
}

const result = isAnnagramma(str, str2);
console.log(result);
