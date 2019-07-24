import { IFonts, ITypography, Unit } from '../../../types'

let units: Unit = 'px'

const rootSize = 16

export const setTypeUnits = (value: Unit) => {
  units = value
}

const getLineHeight = (value: number) => {
  switch(units) {
    case 'rem':
      return value
    default:
      return rootSize * value
  }
}

const getTypeSize = (value: number) => {
  switch(units) {
    case 'rem':
      return `${(value/rootSize).toFixed(2)}${units}`;
    default:
      return `${value}${units}`;
  }
}


const fonts: IFonts = {
  body: 'BentonSans',
  heading: 'ButlerMedium',
}

const typography: ITypography = {
  headings: {
    h1: {
      font: fonts.heading,
      size: getTypeSize(26),
      fontWeight: 600,
      letterSpacing: 1.14,
      lineHeight: getLineHeight(1.16),
    },
    h2: {
      font: fonts.heading,
      size: getTypeSize(22),
      fontWeight: 600,
      letterSpacing: 1.14,
      lineHeight: getLineHeight(1.25),
    },
    h3: {
      font: fonts.heading,
      size: getTypeSize(20),
      fontWeight: 600,
      letterSpacing: 1.14,
      lineHeight: getLineHeight(1.25),
    },
    h4: {
      font: fonts.body,
      size: getTypeSize(18),
      fontWeight: 600,
      letterSpacing: 0,
      lineHeight: getLineHeight(1.25),
    },
    h5: {
      font: fonts.body,
      size: getTypeSize(17),
      fontWeight: 600,
      letterSpacing: 0,
      lineHeight: getLineHeight(1.25),
    },
    h6: {
      font: fonts.body,
      size: getTypeSize(16),
      fontWeight: 600,
      letterSpacing: 0,
      lineHeight: getLineHeight(1.25),
    },
  },
  body: {
    base: {
      font: fonts.body,
      size: getTypeSize(14),
      letterSpacing: 0,
      lineHeight: getLineHeight(1.42),
      fontWeight: 'normal',
    }
  }
}

export default typography
