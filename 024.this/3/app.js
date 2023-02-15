// Напишите функцию, которая принимает почту и возвращает объект, вида
// {
// email,
// active: true / false
// }
// true, если почта содержит @, .com / .ru. False в противном случае

const email = prompt('');

function mail(a) {
    let obj = {
        email: a
    };
    if (a.includes('@') || a.includes('.com') || a.includes('.ru')) {
        obj.active = true
    } else {
        obj.active = false
    }
    return obj
}

const res = mail(email)
console.log(res);