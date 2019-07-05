type Units = 'px' | 'em' | 'rem' | 'pt' | null

export let units: Units = 'px'

export const setUnits = (value: Units) => {
  units = value
}
