import { calculateParagraphHeight, getLineHeight, getTypeSize } from '../../../system/units'
import { IFonts, ITypography } from '../../../types'

const fonts: IFonts = {
  body: 'BentonSans',
  bold: 'BentonSansBold',
  medium: 'BentonSans-Medium',
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
      calculateParagraphHeight: (lines: number, padding: number) => calculateParagraphHeight(lines, 30, 1, padding),
    },
    h2: {
      font: fonts.medium,
      size: getTypeSize(30),
      fontWeight: 'normal',
      letterSpacing: 1.14,
      lineHeight: getLineHeight(1.16, 30),
      calculateParagraphHeight: (lines: number, padding: number) => calculateParagraphHeight(lines, 30, 1.16, padding),
    },
    h3: {
      font: fonts.heading,
      size: getTypeSize(18),
      fontWeight: 600,
      letterSpacing: 1.14,
      lineHeight: getLineHeight(1.375, 18),
      calculateParagraphHeight: (lines: number, padding: number) => calculateParagraphHeight(lines, 18, 1.375, padding),
    },
    h4: {
      font: fonts.medium,
      size: getTypeSize(17),
      fontWeight: 600,
      letterSpacing: 0,
      lineHeight: getLineHeight(1.42, 17),
      calculateParagraphHeight: (lines: number, padding: number) => calculateParagraphHeight(lines, 17, 1.42, padding),
    },
    h5: {
      font: fonts.medium,
      size: getTypeSize(16),
      fontWeight: 600,
      letterSpacing: 0,
      lineHeight: getLineHeight(1.5, 16),
      calculateParagraphHeight: (lines: number, padding: number) => calculateParagraphHeight(lines, 16, 1.5, padding),
    },
  },
  body: {
    base: {
      font: fonts.body,
      size: getTypeSize(17),
      letterSpacing: 0,
      lineHeight: getLineHeight(1.42, 17),
      fontWeight: 'normal',
      calculateParagraphHeight: (lines: number, padding: number) => calculateParagraphHeight(lines, 17, 1.42, padding),
    },
    subheading: {
      font: fonts.body,
      size: getTypeSize(22),
      letterSpacing: 0,
      lineHeight: getLineHeight(1.42, 17),
      fontWeight: 'normal',
      calculateParagraphHeight: (lines: number, padding: number) => calculateParagraphHeight(lines, 22, 1.42, padding),
    },
    bold: {
      font: fonts.medium,
      size: getTypeSize(17),
      letterSpacing: 0,
      lineHeight: getLineHeight(1.42, 17),
      fontWeight: 'normal',
      calculateParagraphHeight: (lines: number, padding: number) => calculateParagraphHeight(lines, 17, 1.42, padding),
    },
    small: {
      font: fonts.body,
      size: getTypeSize(14),
      letterSpacing: 0,
      lineHeight: getLineHeight(1.42, 14),
      fontWeight: 'normal',
      calculateParagraphHeight: (lines: number, padding: number) => calculateParagraphHeight(lines, 14, 1.42, padding),
    },
  }
}

export default typography
