// На вход подается строка из 2 и более слов. Необходимо все пробелы заменить на
// “!”. Если же длина исходной строки не изменилась, вывести true, в противном
// случае бросить исключение и обработать

const str = 'hello world';

function isValid(srt_) {
    try {
        let repleceStr = str_.replaceAll(/ /gm, '!');

        console.log(repleceStr);

        if (str_.length !== repleceStr.length) throw new Error('длина изменилась');
        return true;
    } catch (error) {
        return error.message;
    }
}

    let res = isValid(str);
    console.log(res);