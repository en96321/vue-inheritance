import { IBorder } from './IBorder.js'

/**
 * IButton
 * @author ocean.tsai
 * @public
 * @interface
 * @description
 */
export const IButton = {
  extends: IBorder,

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
