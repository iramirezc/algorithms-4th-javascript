/**
 * Iterator
 * @classdesc Iterable interface for Node elements
 * @abstract
 * @see p. 155
 */
class Iterator {
  constructor (element = null) {
    this._current = element

    Object.seal(this)
  }

  /**
   * Returns if there are
   * more elements in the Iterator.
   */
  hasNext () {
    return this._current !== null
  }

  /**
   * Is best not to modify Data Structures
   * when iterating.
   * @see p. 139
   */
  remove () {
    /* do nothing */
  }

  /**
   * Returns an object implementing the Iterator protocol.
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol
   * @returns {object} iterator protocol
   */
  next () {
    if (this.hasNext()) {
      const item = this._current._item

      this._current = this._current._next

      return {
        value: item,
        done: false
      }
    } else {
      return {
        done: true
      }
    }
  }
}

module.exports = Iterator
