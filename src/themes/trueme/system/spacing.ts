import { getSpacingUnits } from '../../../system/units'
import { ISpacing } from '../../../types'

const spacing: ISpacing = {
  xxs: getSpacingUnits(2),
  xs: getSpacingUnits(4),
  sm: getSpacingUnits(6),
  default: getSpacingUnits(8),
  md: getSpacingUnits(16),
  lg: getSpacingUnits(24),
  xl: getSpacingUnits(32),
  xxl: getSpacingUnits(64),
  xxxl: getSpacingUnits(96),
  xxxxl: getSpacingUnits(128),
}

export default spacing
