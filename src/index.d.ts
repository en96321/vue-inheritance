/**
 * IVueComponent
 * @description Interface for Vue component
 * @interface
 * @property {Object} emits - Vue emits
 * @property {Object} props - Vue props
 * @property {Object} methods - Vue methods
 * @property {Object} computed - Vue computed
 */
export interface IVueComponent {
  emits?: { [key: string]: any };
  props?: { [key: string]: any };
  methods?: { [key: string]: any };
  computed?: { [key: string]: any };
}

/**
 * VueInheritanceComponent
 * @description VueInheritanceComponent class
 * @class
 */
export class VueInheritanceComponent {
  /**
   * implement
   * @param {IVueComponent} interfaceDefine - Vue component
   * @returns {VueInheritanceComponent} VueInheritanceComponent
   */
  implement(interfaceDefine: IVueComponent): VueInheritanceComponent;
}

/**
 * VueInheritance
 * @description VueInheritance
 * @example
 * export default {
 *  name: 'MyComponent',
 *  extends: VueInheritance.extend(UIComponent).implement(IScrollable),
 *  ...
 * }
 */
declare const VueInheritance: {

  /**
   * extend
   * @description Extend, Should only be used once
   * @param {IVueComponent} componentDefine - Vue component
   * @returns {VueInheritanceComponent} VueInheritanceComponent
   */
  extend(componentDefine: IVueComponent): VueInheritanceComponent;
  /**
   * implement
   * @param {IVueComponent} interfaceDefine - Vue component
   * @returns {VueInheritanceComponent} VueInheritanceComponent
   */
  implement(interfaceDefine: IVueComponent): VueInheritanceComponent;
}

export default VueInheritance;