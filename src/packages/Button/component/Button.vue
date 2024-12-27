<template>
	<button
		ref="_ref"
		:class="[
      bem.b(),
      {
        [bem.m(type)]: type,
      },
      bem.is('plain', plain),
      bem.is('disabled', disabled),
      bem.is('round', round),
    ]"
		:disabled="disabled"
    :type="nativeType"
	>
		<span>
			<slot></slot>
		</span>
	</button>
</template>
<script setup lang="ts">
import { createNameSpace } from '@/utils/createBem';
// import type { ButtonProps } from './button';
import { buttonProps } from './button';

// withDefaults(defineProps<ButtonProps>(), {
// 	nativeType: 'button'
// })

defineOptions({
  name: 'Button'
})

const props = defineProps(buttonProps)

const bem = createNameSpace('button')
</script>
<style lang="scss" scoped>
@use "@/assets/theme-chalk/button.scss";
</style>
