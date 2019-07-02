import { units } from './units'

interface ISpacing {
  xxs: number
  xs: number
  sm: number
  default: number
  md: number
  lg: number
  xl: number
  xxl: number
}

const spacing: ISpacing = {
  xxs: `2${units}`,
  xs: `4${units}`,
  sm: `6${units}`,
  default: `8${units}`,
  md: `16${units}`,
  lg: `32${units}`,
  xl: `64${units}`,
  xxl: `128${units}`,
}

export default spacing
