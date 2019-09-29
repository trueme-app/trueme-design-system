export interface IBorder {
  width: {
    [key: string]: string
    default: string
  }
  radius: {
    [key: string]: string
    default: string
    md: string
    lg: string
    xl: string
  }
}

export interface ISpacing {
  [key: string]: string
  xxs: string
  xs: string
  sm: string
  default: string
  md: string
  lg: string
  xl: string
  xxl: string
  xxxl: string
  xxxxl: string
}

export interface IColourDefinition {
  [key: string]: string | undefined
  base?: string
  background?: string
  light?: string
  lighter?: string
  dark?: string
  darker?: string
  text?: string
}

export interface IColour {
  [key: string]: IColourDefinition | string | undefined
  background?: string
  text?: string
  inactive?: string
  error?: string
  valid?: string
  invalid?: string
  disabled?: IColourDefinition
  primary: IColourDefinition
  secondary: IColourDefinition
  tertiary?: IColourDefinition
  quaternary?: IColourDefinition
  quinary?: IColourDefinition
  senary?: IColourDefinition
}

export interface ITypeDefinition {
  font?: string
  size: string
  lineHeight?: number
  letterSpacing?: number
  fontWeight?: string | number
  calculateParagraphHeight: (lines: number, padding: number) => number | string
}

export interface ITypography {
  headings: {
    [key: string]: ITypeDefinition | undefined
    base?: ITypeDefinition
    h1: ITypeDefinition
    h2?: ITypeDefinition
    h3?: ITypeDefinition
    h4?: ITypeDefinition
    h5?: ITypeDefinition
    h6?: ITypeDefinition
  }
  body: {
    base: ITypeDefinition
    bold?: ITypeDefinition
  }
}

export interface ISystem {
  borders: IBorder
  colours: IColour
  spacing: ISpacing
  typography: ITypography
}

export interface ThemeProps {
  theme: ISystem
}

export interface IFonts {
  body: string
  heading: string
}

export type Unit = 'px' | 'em' | 'rem' | 'pt' | ''

export interface UnitMap {
  spacingUnits: Unit
  typeUnits: Unit
}

export type Theme = 'trueme'
