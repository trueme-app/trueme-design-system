import React from 'react'
import { mount } from 'enzyme'
import { ThemeProviderProps } from 'styled-components'
import { DesignSystemThemeProvider } from '../index'
import { ISystem } from '../../types'

describe('System test', () => {
  test('Has correct theme', () => {
    const wrapper = mount(
      <DesignSystemThemeProvider theme='trueme'>
        <></>
      </DesignSystemThemeProvider>
    )
    const themeProvider = wrapper.find('ThemeProvider')
    const props: any = themeProvider.props()
    expect(props.theme).toBeTruthy()
    expect(props.theme.borders).toBeTruthy()
    expect(props.theme.colours).toBeTruthy()
    expect(props.theme.spacing).toBeTruthy()
    expect(props.theme.typography).toBeTruthy()
  })

  test('Uses default them when bad theme name passed', () => {
    const wrapper = mount(
      <DesignSystemThemeProvider theme='this is not a theme'>
        <></>
      </DesignSystemThemeProvider>
    )
    const themeProvider = wrapper.find('ThemeProvider')
    const props: any = themeProvider.props()
    expect(props.theme).toBeTruthy()
    expect(props.theme.borders).toBeTruthy()
    expect(props.theme.colours).toBeTruthy()
    expect(props.theme.spacing).toBeTruthy()
    expect(props.theme.typography).toBeTruthy()
  })
})
