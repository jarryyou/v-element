import type { App } from 'vue'
export type SFCWithInstall<T> = T & {
  install(app: App): void
}

export const withInstall = <T extends { name?: string }>(comp: T): SFCWithInstall<T> => {
  ;(comp as SFCWithInstall<T>).install = (app: App) => {
    const { name } = comp as { name: string }
    console.log('>>>>>>>>>>>' + name)
    app.component(name, comp)
  }
  return comp as SFCWithInstall<T>
}
