import { IBorder, Unit } from '../../../types'

let units: Unit = 'px'

export const setBorderUnits = (value: Unit) => {
  units = value
}

const getBorderUnits = (value: number) => `${value}${units}`

const borders: IBorder = {
  radius: {
    base: getBorderUnits(3),
    md: getBorderUnits(6),
    lg: getBorderUnits(9),
    xl: getBorderUnits(100),
  },
}

export default borders
