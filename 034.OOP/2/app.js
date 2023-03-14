// Реализуйте класс Calculator, который будет хранить в себе 4 метода: сумма чисел,
// разность, произведение, частное. 2 числа передаются в класс, далее вызываеются
// соответствующие функции. Добавить проверки на ввод

class Calculator {
    doPlas(a, b) {
        console.log(a + b);
    }

    doMinus(c, d) {
        console.log(c - d);
     }

    doMultiply(e, f) {
        console.log(e * f);
     }

    doDivide(g, h) { 
        console.log(g / h);
    }
}

const calculator = new Calculator()
calculator.doDivide(10,20)
calculator.doMinus(7,14)
calculator.doMultiply(5,22)
calculator.doPlas(1,2)



class Calculator {
    num1;
    num2;


    doPlas() {
        console.log(this.num1 + this.num2);
    }
    doMinus() {
        console.log(this.num1 - this.num2);
    }
    doMultiply() {
        console.log(this.num1 * this.num2)
    }
    doDivide() {
        console.log(this.num1 / this.num2)
    }
}
// const calculator = new Calculator()

// calculator.num1 = 10;
// calculator.num2 = 20;
// calculator.doDivide()

// calculator.num1 = 7;
// calculator.num2 = 2;
// calculator.doMinus()

// calculator.num1 = 15;
// calculator.num2 = 21;
// calculator.doMultiply()

// calculator.num1 = 10;
// calculator.num2 = 20;
// calculator.doPlas()