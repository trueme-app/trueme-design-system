type Units = 'px' | 'em' | 'rem' | 'pt'

export let units: Units = 'px'

export const setUnits = (value) => {
  units = value
}
