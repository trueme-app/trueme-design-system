import system from '../../../web'

test('Units are px', () => {
  expect(system.spacing.base).toBe('8px')
})
