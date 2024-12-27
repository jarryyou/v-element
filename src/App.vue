<template>
	<Button ref="buttonInstance" type="primary">点击</Button>
	<Button ref="buttonInstance" type="success" round>点击</Button>
	<Icon name="ArrowBackCircleOutline" color="lime" :size="24"></Icon>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import type { ButtonInstance } from '@/packages/Button/component/button'
// button组件也是一个插件，通过使用插件的方式注册之后在编辑器中可以看到上面定义的属性
// 直接在此处引入的话会导致编辑器无法识别属性，需要通过import Button from '@/packages/Button/component/button'的方式引入
// import Button from '@/packages/Button/component/Button.vue'

let buttonInstance = ref<ButtonInstance | null>(null)
onMounted(() => {
	if (buttonInstance.value) {
		console.log(buttonInstance)
	}
})
</script>
<style scoped></style>
