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
    const cloneExtendOptions = clone(extendOptions)
    try {
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