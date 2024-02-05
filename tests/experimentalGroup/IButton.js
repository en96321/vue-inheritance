import VueInheritance from '../../src/index.js'
import { IBorder } from './IBorder.js'
import { IVisibility } from './IVisibility.js'
/**
 * IButton
 * @author ocean.tsai
 * @public
 * @interface
 * @description
 */
export const IButton = {
  extends: VueInheritance.implement(IBorder).implement(IVisibility),
  props: {
    buttonSize: {
      type: String,
      default: 'sm'
    }
  },

  methods: {
    onClick () {
      this.$emit('click', this.value)
    }
  }
}
