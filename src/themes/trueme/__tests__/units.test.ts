import system from '../../../web'

test('Units are px', () => {
  expect(system.spacing.default).toBe('8px')
})
