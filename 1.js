// find the sum of all the multiples of 3 or 5 below 1000.

/**
 * returns true if param 2 is divisible without remainder by param1 
 *
 * @param {number} inside - The number to divide by.
 * @param {number} outside - The numbner to divide.
 */

const fits = (x) => (y) => {
  if (Number.isInteger(y/x)){
    return true
  }
  return false
}


/**
 * Find all numbers that are divisible evenly within a target.
 * @param {array} numbers - the numbers to divide by.
 * @param {number} target - the number to find all numbers within.
 */

const allFits = (p) => (r) => {
  let n = 0
  let fit = []
  while (n < r) {
    const f = p.filter((c) => {
      return fits(c)(n)
    })
    if (f.length > 0) {
      fit.push(n)
    }
    n++
  }
  return fit
} 

/**
 * Find the sum of all numbers in an array.
 * @param {array} - an array of numbers to sum
 */

const sumArr = (m) => {
  return m.reduce((acc, curr, idx, arr) => {
    return acc + curr
  }, 0)
}

const result = sumArr(allFits([3,5])(1000));

/*
 * TODO: use function composition.
 */
/*
const result2 = compose(
  sumArr,
  allFits([3,5])
)(1000)
*/

console.log(result)
