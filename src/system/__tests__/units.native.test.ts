import system from '../../index.native'

describe('Native unit tests', () => {
  test('Spacing units are unitless', () => {
    expect(system.spacing.default).toBe('8')
  })
})
