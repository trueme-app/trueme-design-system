import system from '../../index'
import {
  calculateParagraphHeight,
  getBorderUnits,
  getLineHeight,
  getSpacingUnits,
  getTypeSize,
  setBorderUnits,
  setRootSize,
  setSpacingUnits,
  setTypeUnits,
} from '../units'

describe('Web unit tests', () => {
  test('Spacing are unitless', () => {
    expect(system.spacing.default).toBe('8px')
  })

  test('Border units are correct', () => {
    setBorderUnits('rem')
    expect(getBorderUnits(10)).toBe('10rem')
  })

  test('Spacing units are correct', () => {
    setSpacingUnits('em')
    expect(getSpacingUnits(150.24)).toBe('150.24em')
  })

  test('Type units (rem) are correct', () => {
    setTypeUnits('rem')
    setRootSize(14)
    expect(getTypeSize(16)).toBe('1.143rem')
    setRootSize(16)
    expect(getTypeSize(16)).toBe('1rem')
    expect(getTypeSize(16.5)).toBe('1.031rem')
  })

  test('Type units (px) are correct', () => {
    setTypeUnits('px')
    setRootSize(2)
    expect(getTypeSize(16)).toBe('16px')
    expect(getTypeSize(10.247)).toBe('10.247px')
  })

  test('Line heights are correct', () => {
    setTypeUnits('rem')
    expect(getLineHeight(1.14, 16)).toBe(1.14)
    setTypeUnits('')
    expect(getLineHeight(1.4, 20)).toBe(28)
  })

  test('Paragraph heights are correct', () => {
    setRootSize(16)
    setTypeUnits('')
    expect(calculateParagraphHeight(4, 1, 30)).toBe('120')
    expect(calculateParagraphHeight(10, 1.5, 16)).toBe('240')
    setTypeUnits('rem')
    expect(calculateParagraphHeight(4, 1, 30)).toBe('7.5rem')
    expect(calculateParagraphHeight(10, 1.5, 16)).toBe('15rem')
  })
})
