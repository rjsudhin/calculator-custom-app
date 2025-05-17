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


// clear button setup
clearBtn.addEventListener('click', () => {
  previousValue = ''
  currentValue = ''
  operator = ''
  previousDisplay.textContent = previousValue
  currentDisplay.textContent = currentValue
})


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


// setup equal button
equal.addEventListener('click', () => {
  // calculation configure
  calculatingValues() 
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



function calculatingValues() {
  // make strings to numbers
  previousValue = parseFloat(previousValue)
  currentValue = parseFloat(currentValue)
  
  switch(operator) {
    case 'X':
      previousValue *= currentValue
      break
    case '/':
      previousValue /= currentValue
      break
    case '+':
      previousValue += currentValue
      break
    case '-':
      previousValue -= currentValue
      break
  }


  // round the maximum values 
  previousValue = maximumValuesRounding(previousValue)
  // number back to string
  previousValue = previousValue.toString()
  currentValue = currentValue.toString()
  console.log(`previous value ${typeof previousValue}`)
  console.log(`The answer is ${previousValue}`)
}

// when any unwanted or || getting a long decimal value
function maximumValuesRounding(num) {
  return Math.round(1000 * num) / 1000
}