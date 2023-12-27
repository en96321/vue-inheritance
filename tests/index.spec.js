import { VueInheritance } from '../src/index'

const IButton = {
  data () {
    return {
      style: 'test'
    }
  },
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  emits: ['click'],
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
  data () {
    return {
      label: 'control label'
    }
  },
  emits: ['click', 'change'],
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
console.log('test should merge data')
console.log(extended.data())
console.log('test should merge emits')
console.log(extended.emits)
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

