<template>
	<Button ref="buttonInstance" type="primary">点击</Button>
	<Button ref="buttonInstance" type="success" round>点击</Button>
	<Icon name="ArrowBackCircleOutline" color="lime" :size="24"></Icon>
	<Tree :data="treeData" :default-expanded-keys="[2, 23, 3, 33]"></Tree>
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
					{ key: 331, label: '3-3-1' },
					{ key: 332, label: '3-3-2' },
					{ key: 333, label: '3-3-3' },
					{ key: 334, label: '3-3-4' },
				]
			}
		]
	},
	{
		key: 4,
		label: '4',
		children: [
			{ key: 41, label: '4-1' },
			{ key: 42, label: '4-2',
			children: [
				{ key: 421, label: '4-2-1' },
				{ key: 422, label: '4-2-2' },
				{ key: 423, label: '4-2-3' },
				{ key: 424, label: '4-2-4' },
				{ key: 425, label: '4-2-5' },
				{ key: 426, label: '4-2-6' },
				{ key: 427, label: '4-2-7' },
				{ key: 428, label: '4-2-8' },
			]},
			{
				key: 43,
				label: '4-3',
				children: [
					{ key: 431, label: '4-3-1' },
					{ key: 432, label: '4-3-2' },
					{ key: 433, label: '4-3-3' },
					{ key: 434, label: '4-3-4' },
					{ key: 435, label: '4-3-5' },
					{ key: 436, label: '4-3-6' },
				]
			}
		]
	}
])
</script>
<style scoped></style>
