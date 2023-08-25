//Створення функції за допомогою FunctionDeclaration(Іменовані)
function MyFirstFunction() {
    document.write("<p>Hello from MyFirstFunction!");
    document.write("How are you?");
    document.write("<p>Goodbye!");
}   
function MySecondFunction() {
    document.write("<p>Hello from MySecondFunction!");
   }
// Виклик функцій.
MyFirstFunction();
   
document.write("<hr/>");
   
 // Виклик функцій.
MySecondFunction();
   
document.write("<hr/>");
   
function ask() {
    pame = prompt("Введіть ім'я: ");
    sname = prompt("Введіть прізвище: ");
    age = prompt("Введіть скільки вам років: ");
  }

  function say() {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
      <p>Ім'я: ${pame}</p>
      <p>Прізвище: ${sname}</p>
      <p>Вік: ${age}</p>
      <hr />
    `;
}

function print(msg, count){
    if(count == undefined){
        count = 3;
    }
    for(var i = 0; i < count; i++){
        document.write("<p>" + msg);
    }
    document.write("<hr/>")
}

print("hello");
print("world", 7);
/*
function power(base, exponent) {
    if (typeof base !== 'number' || typeof exponent !== 'number') {
      return 'Параметри повинні бути числового типу';
    }
    
    let result = 1;
    for (let i = 0; i < exponent; i++) {
      result *= base;
    }
    return result;
  }

  let baseValue = 2;
  let exponentValue = 3;
  let result = power(baseValue, exponentValue);

  document.write(`Значення ${baseValue} в ступені ${exponentValue}: ${result}`);
*/
function add(a, b) {
    return a + b;
  }

  function sub(a, b) {
    return a - b;
  }

  function mul(a, b) {
    return a * b;
  }

  function div(a, b) {
    return a / b;
  }

  function power(base, exponent) {
    return Math.pow(base, exponent);
  }

  function sqrt(number) {
    return Math.sqrt(number);
  }

  let operand1 = prompt("Введіть перше число: ");
  let sign = prompt("Введіть знак арифметичної операції: + - * / ^ √");
  let operand2 = undefined;
  let result = undefined;

  operand1 = parseFloat(operand1);
  
  if (sign !== "√") {
    operand2 = prompt("Введіть друге число: ");
    operand2 = parseFloat(operand2);
  }

  switch (sign) {
    case "+":
      result = add(operand1, operand2);
      break;
    case "-":
      result = sub(operand1, operand2);
      break;
    case "*":
      result = mul(operand1, operand2);
      break;
    case "/":
      result = div(operand1, operand2);
      break;
    case "^":
      result = power(operand1, operand2);
      break;
    case "√":
      result = sqrt(operand1);
      break;
    default:
      document.write("<p><b style='color:red'>" + sign + "</b> - не є допустимим знаком арифметичної операції.");
  }

  if (result !== undefined) {
    document.write("<p>" + operand1 + " " + sign + (operand2 !== undefined ? " " + operand2 : "") + " = " + result);
  }

  function max(a,b,c) {
    //функція показує максимальне значення аргументу, який переданий при виклику
    console.log(arguments);
    let maxValue=Number.NEGATIVE_INFINITY; //надаємо спочатку
    //мінус нескінченність
    document.write("<p>Number.NEGATIVE_INFINITY = "+maxValue+"<hr/>");
    //перебираємо циклом аргументи
    for(
    let i=0;
    i<arguments.length;
    i++// arguments - властивість об'єкта max - який є функцією
   )
    if(arguments[i] >maxValue)maxValue=arguments[i];
   
    return maxValue;
   }
    let res=max(-33,33,777, -666, -22,888);
    document.write(
    "<p>Максимальне значення одного з аргументів функції = "+res
   );
   
  