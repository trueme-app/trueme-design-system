import borders from './system/borders'
import colours from './system/colours'
import spacing from './system/spacing'
import typography from './system/typography'
import { setTypeUnits, setUnits, units } from './system/units'
import { ISystem } from '../../types'

const designSystem: ISystem = {
  borders,
  colours,
  setTypeUnits,
  setUnits,
  spacing,
  typography,
}

export default designSystem
