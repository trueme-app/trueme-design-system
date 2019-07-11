import React from 'react'
import { ThemeProvider } from 'styled-components'
import trueme from '../themes/trueme'
import fakeyou from '../themes/fakeyou'
import { ISystem } from '../types'

let currentTheme = 'trueme'

const defaultTheme = trueme
const themes: any = {
  trueme,
  fakeyou,
}

export default themes[currentTheme]

export const DesignSystemThemeProvider = (props: any) => {
  const theme = { ...defaultTheme, ...themes[props.theme] }
  currentTheme = props.theme
  console.log(currentTheme)
  console.log(theme)
  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  )
}
