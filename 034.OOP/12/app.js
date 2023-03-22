// Реализуйте класс Hashtag. В него передается число n – количество элементов
// массива. На основании числа формируется динамический массив из n элементов
// внутри класса. Создать функцию doHashtag, заполняющую новый массив из
// элементов, каждое значение которого имеет вид #name

class Hashtag {
    constructor(num, prompt) {
        this.num = num;
        // this.prompt = prompt;
    }

    doHashtag(array_) {
        try {

            for (let i = 0; i < this.num; i++) {
                let value = prompt(`name`)
                array_.push(`#` + value)
            }

            return array_
        } catch (error) {
            return error.message
        }
    }
}

const array = [];
const hashtag = new Hashtag(5);
const result = hashtag.doHashtag(array);
console.log(result);
