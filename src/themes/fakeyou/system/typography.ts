import { IFonts, ITypography, Unit } from '../../../types'
import { getLineHeight, getTypeSize } from '../../../system/units'

const fonts: IFonts = {
  body: 'BentonSans',
  heading: 'Butler',
}

const typography: ITypography = {
  headings: {
    h1: {
      font: fonts.heading,
      size: getTypeSize(30),
      fontWeight: 600,
      letterSpacing: 1.14,
      lineHeight: getLineHeight(1, 30),
    },
    h2: {
      font: fonts.body,
      size: getTypeSize(30),
      fontWeight: 'normal',
      letterSpacing: 1.14,
      lineHeight: getLineHeight(1.16, 30),
    },
    h3: {
      font: fonts.heading,
      size: getTypeSize(16),
      fontWeight: 600,
      letterSpacing: 1.14,
      lineHeight: getLineHeight(1.375, 16),
    },
    h4: {
      font: fonts.body,
      size: getTypeSize(14),
      fontWeight: 600,
      letterSpacing: 0,
      lineHeight: getLineHeight(1.42, 14),
    },
    h5: {
      font: fonts.body,
      size: getTypeSize(12),
      fontWeight: 600,
      letterSpacing: 0,
      lineHeight: getLineHeight(1.5, 12),
    },
  },
  body: {
    base: {
      font: fonts.body,
      size: getTypeSize(14),
      letterSpacing: 0,
      lineHeight: getLineHeight(1.42, 14),
      fontWeight: 'normal',
    },
    bold: {
      font: fonts.body,
      size: getTypeSize(14),
      letterSpacing: 0,
      lineHeight: getLineHeight(1.42, 14),
      fontWeight: 'bold',
    }
  }
}

export default typography
