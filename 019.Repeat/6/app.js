// На входе строка. Необходимо реализовать алгоритм, убирающий дублирующие
// символы в строке
// hschoolofficial -> hscolfia

// let str = prompt();

let str = 'hschoolofficial';
let res ='';

for(let i=0; i<str.length; i++){
    if(res.includes(str[i])){
        res+=str[i];
    }
}

console.log(res);