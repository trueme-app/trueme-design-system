import { Unit } from '../../../types'

export let units: Unit = 'px'
export let typeUnits: Unit = 'rem'

export const setUnits = (value: Unit) => {
  units = value
}

export const setTypeUnits = (value: Unit) => {
  typeUnits = value
}
