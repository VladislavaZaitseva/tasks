// На вход подается строка в виде электронной почты. Если строка содержит “@” и
// оканчивается на .com, .ru, то вывести true, иначе false

const str = prompt('');

if (str.includes('@', '.com', '.ru')) {
    console.log(true);
} else{
    console.log(false);
}

