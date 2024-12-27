import type { ExtractPropTypes, PropType } from 'vue'

export type Type = 'primary' | 'success' | 'warning' | 'danger' | 'info'
export type Size = 'large' | 'small'
export type NativeType = 'button' | 'submit' | 'reset'

export const buttonProps = {
  type: {
    type: String as PropType<Type>,
    validator: (value: string) => {
      return ['primary', 'success', 'warning', 'danger', 'info'].includes(value)
    }
  },
  size: {
    type: String as PropType<Size>,
    validator: (value: string) => {
      return ['large', 'small'].includes(value)
    }
  },
  plain: {
    type: Boolean
  },
  round: {
    type: Boolean
  },
  disabled: {
    type: Boolean
  },
  loading: {
    type: Boolean
  },
  nativeType: {
    type: String as PropType<NativeType>,
    default: 'button'
  }
} as const

export const buttonEmits = {
  click: (e: MouseEvent) => e instanceof MouseEvent,
  mousedown: (e: MouseEvent) => e instanceof MouseEvent
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonEmits = typeof buttonEmits

export type ButtonInstance = InstanceType<typeof HTMLButtonElement>
