<!-- https://xicons.org/ -->
<template>
  <i :class="bem.b()" :style="style">
    <component :is="icon"></component>
  </i>
</template>
<script lang="ts" setup>
  import * as Icons from '@vicons/ionicons5'
  import { computed } from 'vue'
  import { createNameSpace } from '@/utils/createBem.ts'
  import { iconProps } from './icon'

  defineOptions({
    name: 'Icon',
  })

  interface IconMap {
    [key: string]: any
  }

  const bem = createNameSpace('icon')
  const props = defineProps(iconProps)

  const style = computed(() => {
    if (!props.size && !props.color) return {}
    return {
      ...(props.size ? { 'font-size': props.size + 'px' } : {}),
      ...(props.color ? { color: props.color } : {}),
    }
  })

  const icon = computed(() => {
    const icons = Icons as IconMap
    if (props.name && icons[props.name]) {
      return icons[props.name]
    } else {
      console.error(`Icon ${props.name} not found in @vicons/ionicons5`)
      return null
    }
  })
</script>
<style lang="scss" scoped>
@use '@/assets/theme-chalk/icon.scss';
</style>
