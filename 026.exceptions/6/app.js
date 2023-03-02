const arr = [];

function newArr(arr_) {
    let num = 5;
    for (let i = 0; i < num; i++) {
        arr.push(+prompt())
    }
    return arr_;
}

const res = newArr(arr);
console.log(res);

//[1.2.3.4.5]
// 0 1 2 3 4 
for (let i = 0; i < res.length; i++) {
    if (res[i] % 2 == 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}

function main(res_) {
    try {
        let count = ''; //'gg'
        for (let i = 0; i < res_.length; i++) {
            if (res[i] % 2 == 0) {
                count += 'g'
            }
        }

        if (count.length != 0) {
            throw new Error('у вас в массиве есть четные');
        }

    } catch (error) {
        return error.message;
    }

}

const newRes = main(res);
console.log(newRes);