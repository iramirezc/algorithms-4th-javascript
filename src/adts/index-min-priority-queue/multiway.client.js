/** @module TestClients */

const IndexMinPQ = require('./index-min-priority-queue')
const { StdOut, In } = require('../../libs')

/**
 * IndexMinPQ test client.
 * @memberof module:TestClients
 * @see page: 322.
 * @see [edu.princeton.cs.algs4.Multiway.java]{@link https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/Multiway.java.html}
 */
class Multiway {
  /**
   * Given some ordered streams, it merges all of them
   * in order printing out the sequence in the `StdOut`.
   * @param {Array<In>} streams - The array of `In` streams.
   */
  static merge (streams) {
    const n = streams.length
    const pq = new IndexMinPQ(n)

    for (let i = 0; i < n; i++) {
      if (!streams[i].isEmpty()) {
        pq.insert(i, streams[i].readString())
      }
    }

    while (!pq.isEmpty()) {
      StdOut.printf(pq.minKey() + ' ')

      const i = pq.delMin()

      if (!streams[i].isEmpty()) {
        pq.insert(i, streams[i].readString())
      }
    }
  }

  /**
   * Creates n `In` streams depending on the given file paths,
   * then it merges them in sorted order.
   * @param {...string} args - The file paths.
   * @example <caption>Merging 3 sorted source files</caption>
   * {@lang bash}
   * $ ./client Multiway algs4-data/m1.txt algs4-data/m2.txt algs4-data/m3.txt
   * A A B B B C D E F F G H I I J N P Q Q Z
   */
  static main (args) {
    const streams = args.map(file => new In(file))

    this.merge(streams)
  }
}

module.exports = { Multiway }
