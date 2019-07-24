import borders, { setBorderUnits } from './system/borders'
import colours from './system/colours'
import spacing, { setSpacingUnits } from './system/spacing'
import typography, { setTypeUnits } from './system/typography'
import { ISystem } from '../../types'

const designSystem: ISystem = {
  borders,
  colours,
  spacing,
  typography,
  setSpacingUnits,
  setBorderUnits,
  setTypeUnits,
}

export default designSystem
