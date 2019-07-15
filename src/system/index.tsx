import React from 'react'
import { ThemeProvider } from 'styled-components'
import trueme from '../themes/trueme'
import fakeyou from '../themes/fakeyou'
import { ISystem } from '../types'

let currentTheme = 'trueme'

const defaultTheme = trueme
export const themes: any = {
  trueme,
  fakeyou,
}

export default themes[currentTheme]

export const DesignSystemThemeProvider = (props: any) => {
  const theme = { ...defaultTheme, ...themes[props.theme] }
  currentTheme = props.theme

  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  )
}
