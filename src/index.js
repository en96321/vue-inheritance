import { mergeRight, clone } from 'ramda'

export class VueInheritance {
  constructor ({
    props,
    methods,
    computed
  }) {
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
    try {
      this.props = mergeRight(this.props, extendOptions.props)
      this.methods = mergeRight(this.methods, extendOptions.methods)
      this.computed = mergeRight(this.computed, extendOptions.computed)
      return this
    } catch (e) {
      throw new TypeError('extend error')
    }
  }

  implement = this.extend
}