import { getBorderUnits } from '../../../system/units'
import { IBorder } from '../../../types'

const borders: IBorder = {
  width: {
    default: getBorderUnits(1),
    md: getBorderUnits(6),
    lg: getBorderUnits(8),
  },
  radius: {
    default: getBorderUnits(3),
    md: getBorderUnits(6),
    lg: getBorderUnits(9),
    xl: getBorderUnits(100),
  },
}

export default borders
