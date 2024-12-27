import _Icon from './component/Icon.vue'
import { withInstall } from '@/utils/widthInstall'


const Icon = withInstall(_Icon)
export default Icon
export * from './component/icon'
// 此段代码可将组件上的属性类型暴露出去，比如在vscode中可以看到组件的属性类型
declare module 'vue' {
  export interface GlobalComponents {
    Icon: typeof Icon
  }
}
