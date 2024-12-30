import _Tree from './component/Tree.vue'
import _TreeNode from './component/TreeNode.vue'
import { withInstall } from '@/utils/widthInstall'


const Tree = withInstall(_Tree)
export default Tree
export * from './component/tree'
// 此段代码可将组件上的属性类型暴露出去，比如在vscode中可以看到组件的属性类型
declare module 'vue' {
	export interface GlobalComponents {
		Tree: typeof Tree
	}
}

declare module 'vue' {
	export interface GlobalComponents {
		TreeNode: typeof _TreeNode
	}
}
