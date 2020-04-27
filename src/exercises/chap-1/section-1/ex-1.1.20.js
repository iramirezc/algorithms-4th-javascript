const { StdOut } = require('../../../libs')

/**
 * Exercise 1.1.20
 */
class Exercise {
  /**
   * Calculates n!
   * @param {number} n Positive integer number
   */
  static factorial (n) {
    if (n <= 1) return 1
    return n * this.factorial(n - 1)
  }

  /**
   * Calculates ln(n!).
   * @todo Make recursive. Calculation might be incorrect.
   * @example
   * ```js
   * ln(3!) = ln(3) + ln(2) + ln(1)
   * ```
   * @param {number} n Integer positive number
   */
  static ln (n) {
    const nFactorial = this.factorial(n)
    let exp = 0
    let result = 1.0

    while (result * Math.E <= nFactorial) {
      result *= Math.E
      exp++
    }

    return exp
  }

  /**
   * Solution Exercise 1.1.20
   * @param {[]} args [n] positive integer number
   * @example <caption>ln(10!)</caption>
   * ```shell
   * $ node ex-1.1.20.js 10
   * ln(10!) = 15
   * ```
   */
  static solution (args) {
    const n = args[0]

    StdOut.println(`ln(${n}!) = ${this.ln(n)}`)
  }
}

module.exports = Exercise

// Execution
// ==============================
if (require.main === module) Exercise.solution(process.argv.slice(2))
