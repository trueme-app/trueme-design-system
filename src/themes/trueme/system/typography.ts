import { calculateParagraphHeight, getLineHeight, getTypeSize } from '../../../system/units'
import { IFonts, ITypography } from '../../../types'

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
      calculateParagraphHeight: (lines: number) => calculateParagraphHeight(lines, 30, 1),
    },
    h2: {
      font: fonts.body,
      size: getTypeSize(30),
      fontWeight: 'normal',
      letterSpacing: 1.14,
      lineHeight: getLineHeight(1.16, 30),
      calculateParagraphHeight: (lines: number) => calculateParagraphHeight(lines, 30, 1.16),
    },
    h3: {
      font: fonts.heading,
      size: getTypeSize(16),
      fontWeight: 600,
      letterSpacing: 1.14,
      lineHeight: getLineHeight(1.375, 16),
      calculateParagraphHeight: (lines: number) => calculateParagraphHeight(lines, 16, 1.375),
    },
    h4: {
      font: fonts.body,
      size: getTypeSize(15),
      fontWeight: 600,
      letterSpacing: 0,
      lineHeight: getLineHeight(1.42, 15),
      calculateParagraphHeight: (lines: number) => calculateParagraphHeight(lines, 15, 1.42),
    },
    h5: {
      font: fonts.body,
      size: getTypeSize(14),
      fontWeight: 600,
      letterSpacing: 0,
      lineHeight: getLineHeight(1.5, 11),
      calculateParagraphHeight: (lines: number) => calculateParagraphHeight(lines, 11, 1.5),
    },
  },
  body: {
    base: {
      font: fonts.body,
      size: getTypeSize(16),
      letterSpacing: 0,
      lineHeight: getLineHeight(1.42, 16),
      fontWeight: 'normal',
      calculateParagraphHeight: (lines: number) => calculateParagraphHeight(lines, 16, 1.42),
    },
    bold: {
      font: fonts.body,
      size: getTypeSize(16),
      letterSpacing: 0,
      lineHeight: getLineHeight(1.42, 16),
      fontWeight: 'bold',
      calculateParagraphHeight: (lines: number) => calculateParagraphHeight(lines, 16, 1.42),
    },
  },
}

export default typography
