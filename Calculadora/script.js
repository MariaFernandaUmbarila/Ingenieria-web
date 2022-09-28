//Objeto con las variables que se usarán
const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};
  
//Función para capturar y mostrar los dígitos ingresados
function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calculator;
  
    if (waitingForSecondOperand === true) {
      calculator.displayValue = digit;
      calculator.waitingForSecondOperand = false;
    } 
    else 
      calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
}
  
//Función para poner el punto decimal
function inputDecimal(dot) {
    //Si `displayValue` no contiene puntos decimales...
    if (!calculator.displayValue.includes(dot)) 
      //...le agrega dicho punto decimal
      calculator.displayValue += dot;
}
  
//Función para manejar la secuencia de operaciones
function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator
    const inputValue = parseFloat(displayValue);
  
    if (operator && calculator.waitingForSecondOperand)  {
      calculator.operator = nextOperator;
      return;
    }
  
    if (firstOperand == null) {
      calculator.firstOperand = inputValue;
    } 
    else if (operator) {
      const currentValue = firstOperand || 0;
      const result = performCalculation[operator](currentValue, inputValue);
  
      calculator.displayValue = String(result);
      calculator.firstOperand = result;
    }
  
    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
}

//Objeto con las funciones flecha para realizar las operaciones
const performCalculation = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
  
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
  
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
  
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
  
    '=': (firstOperand, secondOperand) => secondOperand
};
  
//Función para reestablecer los valores de la calculadora
function resetCalculator() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
}
  
//Función para mostrar los resultados de las operaciones
function updateDisplay() {
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.displayValue;
}
  
updateDisplay();
  
//EventListener para el uso y manejo de las funciones programadas
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
  const { target } = event;
  if (!target.matches('button')) {
    return;
  }
    
  if (target.classList.contains('operator')) {
    handleOperator(target.value);
        updateDisplay();
    return;
  }
    
  if (target.classList.contains('decimal')) {
    inputDecimal(target.value);
        updateDisplay();
    return;
  }
    
  if (target.classList.contains('all-clear')) {
    resetCalculator();
        updateDisplay();
    return;
  }

    inputDigit(target.value);
    updateDisplay();
});

  


