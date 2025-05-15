let previousValue = ''
let currentValue = ''
let operator = ''

const previousDisplay = document.querySelector('.previous-display')
const currentDisplay = document.querySelector('.current-display')

const clearBtn = document.querySelector('.clear-btn')
const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const decimal = document.querySelector('.decimal')
const equal = document.querySelector('.equal')


// Numbers clicks
numbers.forEach(num => {
  num.addEventListener('click', (e) => {
    handlingNumbers(e.target.textContent)
    currentDisplay.textContent = currentValue
  })
})


// Operators clicks
operators.forEach(op => {
  op.addEventListener('click', (e) => {
    handlingOperators(e.target.textContent)
    previousDisplay.textContent = previousValue + ' ' + operator
    currentDisplay.textContent = currentValue 
  })
})



function handlingNumbers(num) {
  if (currentValue.length <= 8) {
    currentValue += num
  }
}


function handlingOperators(op) {
  operator = op
  previousValue = currentValue 
  currentValue = ''
}