import type { PropType, ExtractPropTypes } from 'vue';

export interface TreeNodeType {
	label: string
	key: string | number
	level?: number
	children?: TreeNodeType[],
	isExpanded?: boolean,
	[key: string]: any // 支持其它属性
}
export interface TreeNodeWithLevel extends TreeNodeType {
	level: number
}
export const treeProps = {
	data: {
		type: Array as PropType<TreeNodeType[]>,
		default: () => []
	},
	defaultExpandedKeys: {
		type: Array as PropType<(number|string)[]>,
		default: () => []
	}
}
export const treeNodeProps = {
	node: {
		type: Object as PropType<TreeNodeType>,
		default: () => ({})
	}
}
