<template>
	<div
		:class="[ bem.b(),]"
		:style="{ paddingLeft: (node.level || 0) * 16 + 'px' }"
	>
		<div
			:class="[bem.e('content')]"
		>
			<Icon :name="node.isExpanded ? 'CaretDown' : 'CaretForward'"></Icon>
			<span>{{ node.label }}</span>
		</div>
	</div>
</template>
<script lang="ts"  setup>
import { createNameSpace } from '@/utils/createBem.ts'
import { treeNodeProps } from '@/packages/Tree/index.ts'
import { defineProps } from 'vue'

defineOptions({
	name: 'TreeNode'
})

const bem = createNameSpace('tree-node')
const props = defineProps(treeNodeProps)
// console.log(props.node)
</script>
<style scoped>

</style>
