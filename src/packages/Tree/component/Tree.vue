<template>
	<div :class="[
		bem.b(),
	]">
		<TreeNode v-for="o in flattenTreeNodes" :key="o.key" :node="o"></TreeNode>
	</div>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue'
import { createNameSpace } from '@/utils/createBem.ts'
import { type TreeNodeType, type TreeNodeWithLevel, treeProps } from './tree'
import TreeNode from './TreeNode.vue'

defineOptions({
	name: 'Tree'
})

const bem = createNameSpace("tree");
const props = defineProps(treeProps)

const tree: TreeNodeWithLevel[] = (props.data || []).map(o => {
	const node: TreeNodeWithLevel = {
		...o,
		level: o.level || 0
	}
	return node
})

const expandedKeySet = ref(new Set(props.defaultExpandedKeys))
const flattenTreeNodes = computed(() => {
	// 深度优先遍历 使用栈实现 将树形结构转换为一维数组 为后面虚拟滚动做准备
	let flattenNodes:TreeNodeType[] = []
	const nodes: TreeNodeWithLevel[] = tree || []
	const stack = []
	for(let i = nodes.length - 1; i >= 0; i--) {
		stack.push(nodes[i])
	}
	while (stack.length > 0) {
		const node = stack.pop()
		if (!node) continue // 除非栈为空，或者遇到空节点，什么情况会遇到空节点呢
		flattenNodes.push(node)
		if (expandedKeySet.value.has(node.key)) {
			node.isExpanded = true
			const children: TreeNodeType[] = node.children || []
			for (let i = children.length - 1; i >= 0; i--) {
				stack.push({
					...children[i],
					level: node.level + 1
				})
			}
		} else {
			node.isExpanded = false
		}
	}

	return flattenNodes
})

console.log(flattenTreeNodes.value)
</script>
<style scoped>

</style>
