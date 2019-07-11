import system, { DesignSystemThemeProvider } from './system'
const { setUnits, setTypeUnits } = system

setUnits('px')
setTypeUnits('rem')

export default system
export { DesignSystemThemeProvider }
