import { IVisibility } from './IVisibility.js'

/**
 * IBorder
 * @author ocean.tsai
 * @public
 * @interface
 * @description
 */
export const IBorder = {
  extends: IVisibility,
  props: {
    borderSize: {
      type: Number,
      default: '1px'
    }
  }
}
