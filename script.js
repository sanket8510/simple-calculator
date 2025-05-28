const buttons = document.querySelectorAll('.btn');
const resultInput = document.getElementById('result');

let expression = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (value === 'C') {
      expression = '';
      resultInput.value = '';
    } else if (value === '=') {
      try {
        expression = eval(expression).toString();
        resultInput.value = expression;
      } catch {
        resultInput.value = 'Error';
      }
    } else if (value === '←') {
      expression = expression.slice(0, -1);
      resultInput.value = expression;
    } else {
      expression += value;
      resultInput.value = expression;
    }
  });
});
