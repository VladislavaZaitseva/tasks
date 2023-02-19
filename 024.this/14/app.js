// Напишите функцию, генерирующую пароль из 8 символов. (Math.random)

const arr = 8;

function password(arr_) {
    let pass = '';

    for (let i = 0; i < 8; i++) {
        pass += Math.random() * 8;
    }

    return pass;
}

const res = password(arr_);
console.log(res);