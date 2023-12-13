# Vue Inheritance

### Introduction

vue-inheritance is an npm package designed for Vue.js projects. It provides a convenient way to manage and reuse component properties and methods. Leveraging Vue's extension and mixin capabilities, this package simplifies the definition and application of component attributes, making it more modular.

**Installation**

In your Vue project, install vue-inheritance using the following command:

```bash
npm install vue-inheritance
```

**Usage**

In your Vue project, import VueInheritance:

```
import { VueInheritance } from 'vue-inheritance'
```

**Define Interface Modules**

Define one or more props, methods, computed modules.

```javascript
// IControl
export const IControl = {
  props: {
    disabled: {
       type: Boolean,
       default: false
    }
  }
}

// ITheme
export const ITheme = {
  props: {
    theme: {
      type: String,
      default: 'Standard'
    }
  }
}

// ILoading
export const ILoading = {
  props: {
    isLoading: {
      type: Boolean,
      default: false
    }
  }
}


//IButton 
export const ILoading = VueInheritance
  .extend(IControl)
  .extend(ITheme)
  .extend({
    methods: {
      onClick(e) {
        this.$emit('click', e)
      }
    }
  })
```

**Implement**

In your specific component, use the VueInheritance implement method to apply Interface modules.

```javascript
// Button.vue
export default {
  extends: VueInheritance.implement(IControl).implement(ITheme),
  methods: {
    onClick(e) {
      this.$emit('click', e)
    }
  }
}

// or

export default {
  extends: IButton
}
```

**Extend**

In another component, use the extend method to inherit an existing component and the implement method to apply additional attribute modules.

```javascript
// LoadingButton.vue
import Button from './Button.vue'

export default {
  extends: VueInheritance.extend(Button).implement(ILoading)
}
```

**Examples**
Button with IControl and ITheme

```vue
<template>
   <button :disabled="disabled" :class="theme" @click="onClick">Click me</button>
</template>

<script>
import { VueInheritance } from 'vue-inheritance'
import { IControl } from '@/core/IControl.js'
import { ITheme } from '@/core/ITheme.js'

export default {
   extends: VueInheritance.implement(IControl).implement(ITheme),
   methods: {
      onClick(e) {
         this.$emit('click', e)
      }
   }
}
</script>
```

Loading Button with ILoading

```vue
<template>
   <Button :disabled="disabled || isLoading" :class="theme" @click="onClick">
      <span v-if="isLoading">Loading...</span>
      <span v-else>Click me</span>
   </Button>
</template>

<script>
import { VueInheritance } from 'vue-inheritance'
import Button from './Button.vue'
import { ILoading } from '@/core/ILoading.js'

export default {
   extends: VueInheritance.extend(Button).implement(ILoading)
}
</script>
```

This way, you can define interface modules based on project requirements and flexibly apply and reuse them in your components.

