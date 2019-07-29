import { setBorderUnits, setSpacingUnits, setTypeUnits } from './system/units'

setBorderUnits('px')
setSpacingUnits('px')
setTypeUnits('rem')

import system, { DesignSystemThemeProvider, themes } from './system'

export { DesignSystemThemeProvider, themes }
export * from './types'
export default system
