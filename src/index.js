import { clone, isNil, isNotNil, has, isEmpty } from 'ramda'

/**
 * Vue3Component
 * @class
 * @private
 * @author pedro.yang、 ocean.tsai
 * @description
 */
class Vue3Component {
  /**
   * InvalidInterfaceKeys
   * @static
   * @constant
   * @private
   * @type
   * @description interfaceDefine will be checked, if it conforms to the interface, it return true; otherwise, it returns false.
   */
  static InvalidInterfaceKeys = Object.freeze([
    'watch',
    'beforeCreate', 'created',
    'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted',
    'errorCaptured', 'renderTracked', 'activated', 'deactivated', 'serverPrefetch'
  ])

  /**
   * validateInterface
   * @static
   * @method
   * @protected
   * @param {VueInterface} interfaceDefine the param will be checked.
   * @description interfaceDefine will be checked, if it conforms to the interface, it return true; otherwise, it returns false.
   */
  static validateInterface (interfaceDefine) {
    // hasIn 是包含 prototype has 不會含 prototype
    return Vue3Component.InvalidInterfaceKeys.every((key) => !has(key, interfaceDefine))
  }

  /**
   * typeCheck
   * @static
   * @method
   * @protected
   * @param {VueInterface} interfaceDefine the param will be checked.
   * @description interfaceDefine will be checked, if it conforms to the interface, it return true; otherwise, it returns false.
   */
  static typeCheck (interfaceDefine) {
    if (isNil(interfaceDefine)) {
      throw new Error('Interface cannot be null or undefined.')
    } else if (isEmpty(interfaceDefine)) {
      throw new Error('Interface cannot be empty object.')
    } else if (!Vue3Component.validateInterface(interfaceDefine)) {
      throw new Error('The incoming parameter must be an interface.')
    }
  }

  /**
   * extend
   * @static
   * @method
   * @param {VueComponent} componentDefine componentDefine to be inherited.
   * @param {VueComponent} override override to be override.
   * @description
   */
  static extend (componentDefine, override) {
    const vue3Component = isNotNil(componentDefine)
      ? Object.assign(new Vue3Component(), clone(componentDefine))
      : new Vue3Component()

    return isNotNil(override)
      ? Object.assign(vue3Component, clone(override))
      : vue3Component
  }

  /**
   * implement
   * @static
   * @method
   * @public
   * @param {VueComponent} interfaceDefine interfaceDefine to be inherited.
   * @description Vue's interface can only define props、methods.
   */
  static implement (interfaceDefine) {
    Vue3Component.typeCheck(interfaceDefine)
    return Vue3Component.extend(interfaceDefine)
  }

  // eslint-disable-next-line no-useless-constructor
  constructor (componentOptions) {
  }

  /**
   * extends
   * @type {VueComponent} extends
   * @description property of Vue component option api.
   */
  extends = null

  /**
   * implement
   * @static
   * @method
   * @public
   * @param {VueInterface} interface interface to be inherited.
   * @description Vue's interface can only define props、methods.
   */
  implement (interfaceDefine) {
    Vue3Component.typeCheck(interfaceDefine)

    if (isNil(this.extends) || isEmpty(this.extends)) {
      this.extends = clone(interfaceDefine)
    } else {
      let deepestNode = this.extends
      // find deepes node.
      while (isNotNil(deepestNode.extends)) {
        deepestNode = deepestNode.extends
      }
      deepestNode.extends = clone(interfaceDefine)
    }
    return this
  }
}

/**
 * VueInheritance
 * @static
 * @public
 * @description
 */
const VueInheritance = Object.freeze({
  extend: Vue3Component.extend,
  implement: Vue3Component.implement
})

export default VueInheritance
