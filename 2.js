/*
 * Generate a fibonacci sequence, up to a limit.
 * @param {number} - the largest number to appear in the fibonacci sequence
 */

const fibMax = (t) => {
  let fibs = [] 
  let prev = [0 , 1]
  while (prev[1] < t) {
    let next = prev[0] + prev[1]
    if (next < t) {
      fibs.push(next)
    }
      prev[0] = prev[1]
      prev[1] = next
  }
  return fibs
}

const result = fibMax(4000000).filter(n => n % 2 === 0).reduce((curr, acc) => {
  return curr + acc
}, 0)

console.log(result);
