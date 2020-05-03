import { setBorderUnits, setSpacingUnits, setTypeUnits } from './system/units'

setBorderUnits('px')
setSpacingUnits('px')
setTypeUnits('px')

import system, { DesignSystemThemeProvider, themes } from './system'
export { DesignSystemThemeProvider, themes }
export * from './types'
export default system
