import { Unit, ISpacing } from '../../../types'

let units: Unit = 'px'

export const setSpacingUnits = (value: Unit) => {
  units = value
}

const getSpacingUnits = (value: number) => `${value}${units}`

const spacing: ISpacing = {
  xxs: getSpacingUnits(2),
  xs: getSpacingUnits(4),
  sm: getSpacingUnits(6),
  default: getSpacingUnits(8),
  md: getSpacingUnits(16),
  lg: getSpacingUnits(24),
  xl: getSpacingUnits(32),
  xxl: getSpacingUnits(64),
  xxxl: getSpacingUnits(128),
}

export default spacing
