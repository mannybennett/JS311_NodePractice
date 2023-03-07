const split = (str, delim) => {
  return str.split(delim)
}

const pairs = (str) => {
  
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