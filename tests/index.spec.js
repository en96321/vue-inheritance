import VueInheritance from '../src/index.js' // 請確保路徑正確
import { IButton as ControlGroupIButton } from './controlGroup/IButton.js'
import { IButton as ExperimentalGroupIButton } from './experimentalGroup/IButton.js'

describe('VueInheritance', () => {
  test('The implementation method should return an object with isShow', () => {
    const IVisibility = VueInheritance.implement({
      props: {
        isShow: {
          type: Boolean,
          default: true
        }
      }
    })

    expect(IVisibility).toHaveProperty('props.isShow', {
      type: Boolean,
      default: true
    })

    expect(IVisibility).toEqual({
      extends: null,
      props: {
        isShow: {
          type: Boolean,
          default: true
        }
      }
    })
  })

  test('The experimentalGroupIButton test', () => {
    expect(ExperimentalGroupIButton).toHaveProperty('extends', {
      extends: {
        props: {
          visible: {
            type: Boolean,
            default: true
          }
        }
      },
      props: {
        borderSize: {
          type: Number,
          default: '1px'
        }
      }
    })
    expect(ExperimentalGroupIButton).toHaveProperty('props', {
      buttonSize: {
        type: String,
        default: 'sm'
      }
    })
    expect(ExperimentalGroupIButton).toHaveProperty('methods.onClick')
  })
})

test('The ControlGroupIButton test', () => {
  expect(ControlGroupIButton).toHaveProperty('extends', {
    extends: {
      props: {
        visible: {
          type: Boolean,
          default: true
        }
      }
    },
    props: {
      borderSize: {
        type: Number,
        default: '1px'
      }
    }
  })
  expect(ControlGroupIButton).toHaveProperty('props', {
    buttonSize: {
      type: String,
      default: 'sm'
    }
  })
  expect(ControlGroupIButton).toHaveProperty('methods.onClick')
})
