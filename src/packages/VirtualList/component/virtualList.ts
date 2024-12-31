import { type PropType } from 'vue'

export const virtualListProps = {
	list: {
		type: Array as PropType<any[]>,
		default: () => []
	},
	remain: {
		type: Number,
		default: 8
	},
	itemHeight: {
		type: Number,
		default: 30
	},
	// 显示的高度
	viewportHeight: {
		type: Number,
		default: 240
	}
}
