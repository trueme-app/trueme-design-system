import { Unit } from '../types'

let rootSize: number = 16
let typeUnits: Unit = 'rem'
let borderUnits: Unit = 'px'
let spacingUnits: Unit = 'px'

export const getBorderUnits = (value: number) => `${value}${borderUnits}`

export const getSpacingUnits = (value: number) => `${value}${spacingUnits}`

export const getLineHeight = (value: number, fontSize: number) => {
  switch(typeUnits) {
    case 'rem':
      return value
    default:
      return fontSize * value
  }
}

export const getTypeSize = (value: number) => {
  switch(typeUnits) {
    case 'rem':
      return `${parseFloat((value/rootSize).toFixed(3))}${typeUnits}`;
    default:
      return `${value}${typeUnits}`;
  }
}

export const setBorderUnits = (value: Unit) => {
  borderUnits = value
}

export const setSpacingUnits = (value: Unit) => {
  spacingUnits = value
}

export const setTypeUnits = (value: Unit) => {
  typeUnits = value
}

export const setRootSize = (value: number) => {
  rootSize = value
}
