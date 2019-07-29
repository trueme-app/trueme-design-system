import { IBorder, Unit } from '../../../types'
import { getBorderUnits } from '../../../system/units'

const borders: IBorder = {
  width: {
    default: getBorderUnits(1),
  },
  radius: {
    default: getBorderUnits(3),
    md: getBorderUnits(6),
    lg: getBorderUnits(9),
    xl: getBorderUnits(100),
  },
}

export default borders
