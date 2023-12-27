import { mergeRight, clone, defaultTo, uniq, concat } from 'ramda'

const isFunction = val => typeof val === 'function'

const parseArray = defaultTo([])

export class VueInheritance {
  constructor ({
    data,
    emits,
    props,
    methods,
    computed
  }) {
    this.data = clone(data)
    this.emits = clone(emits),
    this.props = clone(props)
    this.methods = clone(methods)
    this.computed = clone(computed)
  }
  static extend (extendOptions) {
    const sub = new VueInheritance(extendOptions)
    sub.extend(extendOptions.extends || {})
    return sub
  }

  static implement = VueInheritance.extend

  extend (extendOptions) {
    const cloneExtendOptions = clone(extendOptions)
    try {
      const currentData = this.data
      this.data = function () {
        return mergeRight(
          isFunction(currentData) ? currentData.call(this) : currentData,
          isFunction(cloneExtendOptions.data) ? cloneExtendOptions.data.call(this) : cloneExtendOptions.data
        )
      }
      this.emits = uniq(concat(parseArray(this.emits), parseArray(cloneExtendOptions.emits)))
      this.props = mergeRight(this.props, cloneExtendOptions.props)
      this.methods = mergeRight(this.methods, cloneExtendOptions.methods)
      this.computed = mergeRight(this.computed, cloneExtendOptions.computed)
      return this
    } catch (e) {
      throw new TypeError('extend error')
    }
  }

  implement = this.extend
}