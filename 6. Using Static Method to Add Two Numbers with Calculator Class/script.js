class Calculator {
  static add(num1, num2) {
    return num1 + num2;
  }
}

const calculator = new Calculator();

const sum = Calculator.add(2, 3);

console.log(sum);


