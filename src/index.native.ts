import { setBorderUnits, setSpacingUnits, setTypeUnits } from './system/units'

setBorderUnits('')
setSpacingUnits('')
setTypeUnits('')

import system, { DesignSystemThemeProvider, themes } from './system'
export { DesignSystemThemeProvider, themes }
export * from './types'
export default system
