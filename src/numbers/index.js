const isEven = (num) => {
  return num % 2 === 0 ? true : false
}

const sum = (arr) => {
  return arr.reduce((x, y) => x + y)
}

const comboSum = (arr, sum) => {
  return arr.reduce((x, y) => x + y) === sum ? true : false
}

module.exports = {
  isEven,
  sum,
  comboSum
}