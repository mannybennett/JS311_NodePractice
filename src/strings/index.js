const split = (str, delim) => {
  return str.split(delim)
}

const pairs = (str) => {
  let strArr = Array.from(str)
  let arr = []
  while (strArr.length > 0) {
    arr.push(strArr.splice(0, 2).join(''))
  }
  return arr
}

const reverse = (str) => {
  let arr = Array.from(str)
  return arr.reverse().join('')
}

module.exports = {
  split,
  pairs,
  reverse
}