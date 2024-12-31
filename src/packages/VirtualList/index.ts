import _VirtualList from './component/VirtualList.vue'

import { withInstall } from './utils'

export const VirtualList = withInstall(_VirtualList)

declare module 'vue' {
	export interface GlobalComponents {
		VirtualList: typeof VirtualList
	}
}
