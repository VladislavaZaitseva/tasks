// На вход подается строка в виде электронной почты пользователя. Необходимо
// найти в данной почте “@”. Если же есть, то вывести булевое true, в противном
// случае бросить исключение и его обработать

const email = `sashagmail.com`;
email.includes('@')

function isValid(email_) {
    try {
        if (email_.includes('@')) {
            true
        } else throw new Error('You do not have @')

        return true

    } catch (error) {
        return error.message;
    }
}

const result = isValid(email);
console.log(result);