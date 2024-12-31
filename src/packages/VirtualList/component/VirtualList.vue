<template>
	<div
		:class="[bem.b()]"
		:style="{
			height: wrapperHeight + 'px',
			overflowY: 'scroll',
			position: 'relative',
			border: '1px solid red'
		}"
		@scroll="e => handleScroll(e)"
	>
		<div
			:class="[ bem.e('scroll-list') ]"
			:style="{
				background: 'lime',
				width: '100%',
				position: 'absolute',
				top: 0,
				left: 0,
				transform: `translateY(${offset}px)`,
			}"
		>
			<div
				v-for="item in visibleData"
				:key="item.key"
				:class="[bem.e('content')]"
			>
				<slot :node="item"></slot>
			</div>
		</div>
		<div
			:class="[bem.e('scroll-bar')]"
			:style="{
				width: '10px',
				height: scrollBarHeight + 'px',
			}"
		></div>
	</div>
</template>
<script lang="ts" setup>
import { createNameSpace } from '@/utils/createBem.ts'
import { virtualListProps } from './virtualList.ts'
import { ref, reactive, computed } from 'vue'

defineOptions({
	name: 'VirtualList'
})

const props = defineProps(virtualListProps)
const bem = createNameSpace('virtual-list')

const wrapperHeight = computed(() => {
	return props.remain * props.itemHeight
})

const scrollBarHeight = computed(() => {
	return props.list.length * props.itemHeight
})

const state = reactive({
	start: 0,
	end: props.remain,
})

// 计算出需要渲染的列表 prev next视口外侧预渲染的数量，避免在滚动时出现间隙
const prev = computed(() => {
	return Math.min(state.start, props.remain)
})
const next = computed(() => {
	return Math.min(props.list.length - state.end, props.remain)
})
const visibleData = computed(() => {
	return props.list.slice(state.start - prev.value, state.end + next.value)
})

const offset = ref(0)
const handleScroll = e => {
	// console.log(e.target.scrollTop)
	state.start = Math.floor(e.target.scrollTop / props.itemHeight)
	state.end = state.start + props.remain
	offset.value = (state.start - prev.value) * props.itemHeight
}
</script>
<style scoped>

</style>
