import type { ExtractPropTypes, PropType } from 'vue'

// 这里面准备组件相关的属性以及相关的类型
export const iconProps = {
  name: {
    type: String,
    required: true
  },
  color: String,
  size: [String, Number] as PropType<number | string>,
} as const

export type IconProps = ExtractPropTypes<typeof iconProps>
