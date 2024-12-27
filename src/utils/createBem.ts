// b --> 代码块 e --> 元素 m --> 装饰

export const createNameSpace = (name: string) => {
  const prefix = `v-${name}`
  return createBEM(prefix)
}

const createBEM = (prefix: string) => {
  const b = (blockSuffix: string = '') => gen(prefix, blockSuffix, '', '')
  const e = (element: string = '') => gen(prefix, '', element, '') || ''
  const m = (modifier: string = '') => gen(prefix, '', '', modifier) || ''
  const be = (blockSuffix: string = '', element: string = '') => gen(prefix, blockSuffix, element, '') || ''
  const bm = (blockSuffix: string = '', modifier: string = '') => gen(prefix, blockSuffix, '', modifier) || ''
  const em = (element: string = '', modifier: string) => gen(prefix, '', element, modifier) || ''
  const bem = (blockSuffix: string = '', element: string = '', modifier: string = '') => gen(prefix, blockSuffix, element, modifier) || ''
  const is = (name: string, state: string | boolean) => (state ? `is-${name}` : '')
  return { b, e, m, be, bm, em, bem, is }
}

const gen = (prefix: string, blockSuffix: string, element: string, modifier: string): string => {
  if (blockSuffix) {
    prefix += `-${blockSuffix}`
  }
  if (element) {
    prefix += `__${element}`
  }
  if (modifier) {
    prefix += `--${modifier}`
  }
  return prefix
}

// const bem = createNameSpace('button')
// console.log(bem.b('box'))
// console.log(bem.e('element'))
// console.log(bem.m('modifier'))
// console.log(bem.bem('box', 'element', 'modifier'))
// console.log(bem.is('checked', true))
