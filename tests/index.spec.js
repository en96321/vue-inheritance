import { VueInheritance } from '../src/index'

const IButton = {
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  methods: {
    onClick () {}
  },
  computed: {
    hasLabel () {
      return true
    }
  }
}

const IControl = {
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick () {
      return 'has implement'
    }
  }
}

let extended = VueInheritance.extend(IButton).implement(IControl)

console.log('test should merge props')
console.log(extended.props)
console.log('test should merge computed')
console.log(extended.computed)
console.log('test should cover methods')
console.log(extended.methods.onClick())
console.log('test call by reference')
extended.props.label = { type: String, default: 'change by reference' }
console.log('extended', extended.props.label)
console.log('origin', IButton.props.label)

