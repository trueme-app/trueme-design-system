import { units } from './units'

interface ISpacing {
  xxs: string
  xs: string
  sm: string
  default: string
  md: string
  lg: string
  xl: string
  xxl: string
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
