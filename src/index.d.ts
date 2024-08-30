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
 * @example
 * const MyComponent = VueInheritance.extend(UIComponent).implement(IScrollable)
 *  
 */
export interface VueInheritanceComponent extends IVueComponent {
  /**
   * extend
   * @description Extend, Should only be used once
   * @param component {IVueComponent} - Vue component
   * @returns {VueInheritanceComponent} - VueInheritanceComponent
   */
  extend(component: IVueComponent): VueInheritanceComponent;
  /**
   * implement
   * @param component {IVueComponent} - Vue component
   * @returns {VueInheritanceComponent} - VueInheritanceComponent
   */
  implement(component: IVueComponent): VueInheritanceComponent;
}

/**
 * VueInheritance
 * @description VueInheritance
 * @example
 * const MyComponent = VueInheritance.extend(UIComponent).implement(IScrollable)
 *  
 */
declare const VueInheritance: {

  /**
   * extend
   * @description Extend, Should only be used once
   * @param component {IVueComponent} - Vue component
   * @returns {VueInheritanceComponent} - VueInheritanceComponent
   */
  extend(component: IVueComponent): VueInheritanceComponent;
  /**
   * implement
   * @param component {IVueComponent} - Vue component
   * @returns {VueInheritanceComponent} - VueInheritanceComponent
   */
  implement(component: IVueComponent): VueInheritanceComponent;
}

export default VueInheritance;