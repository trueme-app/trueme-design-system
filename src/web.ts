import system, { DesignSystemThemeProvider, themes } from './system'
const { setBorderUnits, setSpacingUnits, setTypeUnits } = system

setBorderUnits('px')
setSpacingUnits('px')
setTypeUnits('rem')

export { DesignSystemThemeProvider, themes }
export * from './types'
export default system
