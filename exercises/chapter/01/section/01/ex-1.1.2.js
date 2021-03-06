const { StdOut } = require('../../../../../src/libs')

/**
 * Exercise 1.1.2
 */
class Exercise {
  /**
   * Solution Exercise 1.1.2
   * @example
   * ```sh
   * $ node ex-1.1.2.js
   * a) 1.618 (number)
   * b) 10 (number)
   * c) true (boolean)
   * d) 33 (string)
   * ```
   */
  static solution () {
    const a = Exercise.a()
    const b = Exercise.b()
    const c = Exercise.c()
    const d = Exercise.d()

    StdOut.println(`a) ${a} (${typeof a})`)
    StdOut.println(`b) ${b} (${typeof b})`)
    StdOut.println(`c) ${c} (${typeof c})`)
    StdOut.println(`d) ${d} (${typeof d})`)
  }

  static a () {
    return (1 + 2.236) / 2
  }

  static b () {
    return 1 + 2 + 3 + 4.0
  }

  static c () {
    return 4.1 >= 4
  }

  static d () {
    return 1 + 2 + '3'
  }
}

// Exports
// ==============================
module.exports = Exercise

// Bash Execution
// ==============================
if (require.main === module) Exercise.solution()
