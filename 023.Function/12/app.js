// На входе строка. Необходимо создать функцию, возвращающую true, если это
// слово палиндром и false в противном случае

const str = 'lesasel'.split('');

function polind(str_) {
    const strRev = str_.reverse();
    return str_.join('') == strRev.join('') ? true : false;
}

const res = polind(str)
console.log(res);