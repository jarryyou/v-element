import _Button from './component/Button.vue'
import { withInstall } from '@/utils/widthInstall'


const Button = withInstall(_Button)
export default Button
export * from './component/button'
declare module 'vue' {
  export interface GlobalComponents {
    Button: typeof Button
  }
}
