<template>
	<Button ref="buttonInstance" type="primary">点击</Button>
	<Button ref="buttonInstance" type="success" round>点击</Button>
	<Icon name="ArrowBackCircleOutline" color="lime" :size="24"></Icon>
	<Tree :data="treeData" :default-expanded-keys="[2, 23]"></Tree>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import type { ButtonInstance } from '@/packages/Button/component/button'
// button组件也是一个插件，通过使用插件的方式注册之后在编辑器中可以看到上面定义的属性
// 直接在此处引入的话会导致编辑器无法识别属性，需要通过import Button from '@/packages/Button/component/button'的方式引入
// import Button from '@/packages/Button/component/Button.vue'

// let buttonInstance = ref<ButtonInstance | null>(null)
// onMounted(() => {
// 	if (buttonInstance.value) {
// 		console.log(buttonInstance)
// 	}
// })

const treeData = ref([
	{ key: 1, label: '1' },
	{
		key: 2, label: '2', children: [
			{ key: 21, label: '2-1' },
			{ key: 22, label: '2-2' },
			{
				key: 23, label: '2-3', children: [
					{ key: 231, label: '2-3-1' },
					{ key: 232, label: '2-3-2' },
					{ key: 233, label: '2-3-3' }
				]
			}
		]
	},
	{
		key: 3,
		label: '3',
		children: [
			{ key: 31, label: '3-1' },
			{ key: 32, label: '3-2' },
			{
				key: 33,
				label: '3-3',
				children: [
					{ key: 34, label: '3-3-1' },
					{ key: 35, label: '3-3-2' },
					{ key: 36, label: '3-3-3' },
					{ key: 37, label: '3-3-4' },
				]
			}
		]
	}
])
</script>
<style scoped></style>
