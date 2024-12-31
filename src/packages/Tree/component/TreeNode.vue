<template>
	<div
		:class="[ bem.b(),]"
		:style="{ paddingLeft: (node.level || 0) * 16 + 'px' }"
	>
		<div
			:class="[bem.e('content')]"
		>
			<Icon class="expand-icon" :name="node.isExpanded ? 'CaretDown' : 'CaretForward'" @click="() => toggleExpand(node)"></Icon>
			<span>{{ node.label }}</span>
		</div>
	</div>
</template>
<script lang="ts" setup>
import { createNameSpace } from '@/utils/createBem.ts'
import { treeNodeProps, type TreeNodeType } from '@/packages/Tree/index.ts'
import { defineProps, computed } from 'vue'

defineOptions({
	name: 'TreeNode'
})

const emits = defineEmits(['toggleExpand'])

const bem = createNameSpace('treeNode')
const props = defineProps(treeNodeProps)

const toggleExpand = (node: TreeNodeType) => {
	emits('toggleExpand', node)
}
</script>
<style lang="scss" scoped>
@use '@/assets/theme-chalk/treeNode.scss';
.expand-icon {
	cursor: pointer;
}
</style>
