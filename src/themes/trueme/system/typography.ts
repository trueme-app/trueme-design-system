import { typeUnits } from './units'
import { IFonts, ITypography } from '../../../types'

const fonts: IFonts = {
  body: 'Benton Sans',
  heading: 'Butler Medium',
}

const typography: ITypography = {
  headings: {
    h1: {
      font: fonts.heading,
      size: `26${typeUnits}`,
      fontWeight: 600,
      letterSpacing: 1.14,
      lineHeight: 1.16,
    },
    h2: {
      font: fonts.heading,
      size: `22${typeUnits}`,
      fontWeight: 600,
      letterSpacing: 1.14,
      lineHeight: 1.25,
    },
    h3: {
      font: fonts.heading,
      size: `20${typeUnits}`,
      fontWeight: 600,
      letterSpacing: 1.14,
      lineHeight: 1.25,
    },
    h4: {
      font: fonts.body,
      size: `18${typeUnits}`,
      fontWeight: 600,
      letterSpacing: 0,
      lineHeight: 1.25,
    },
    h5: {
      font: fonts.body,
      size: `17${typeUnits}`,
      fontWeight: 600,
      letterSpacing: 0,
      lineHeight: 1.25,
    },
    h6: {
      font: fonts.body,
      size: `16${typeUnits}`,
      fontWeight: 600,
      letterSpacing: 0,
      lineHeight: 1.25,
    },
  },
  body: {
    base: {
      font: fonts.body,
      size: `16${typeUnits}`,
      letterSpacing: 0,
      lineHeight: 1.74,
      fontWeight: 'normal',
    }
  }
}

export default typography
