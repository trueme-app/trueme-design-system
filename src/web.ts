import system, { DesignSystemThemeProvider, themes } from './system'
const { setUnits, setTypeUnits } = system

setUnits('px')
setTypeUnits('rem')

export default system
export { DesignSystemThemeProvider, themes }
export * from './types'
