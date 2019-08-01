import { Unit } from '../types'

const units = {
  rootSize: 16,
  typeUnits: 'rem',
  borderUnits: 'px',
  spacingUnits: 'px',
}

export const getBorderUnits = (value: number) => `${value}${units.borderUnits}`

export const getSpacingUnits = (value: number) => `${value}${units.spacingUnits}`

export const getLineHeight = (value: number, fontSize: number) => {
  switch (units.typeUnits) {
    case 'rem':
      return value
    default:
      return fontSize * value
  }
}

export const getTypeSize = (value: number) => {
  switch (units.typeUnits) {
    case 'rem':
      return `${parseFloat((value / units.rootSize).toFixed(3))}${units.typeUnits}`
    default:
      return `${value}${units.typeUnits}`
  }
}

export const setBorderUnits = (value: Unit) => {
  units.borderUnits = value
}

export const setSpacingUnits = (value: Unit) => {
  units.spacingUnits = value
}

export const setTypeUnits = (value: Unit) => {
  units.typeUnits = value
}

export const setRootSize = (value: number) => {
  units.rootSize = value
}
