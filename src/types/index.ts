export interface IBorder {
  width: {
    [key: string]: string
    default: string
    md: string
    lg: string
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
}

export interface IColour {
  [key: string]: IColourDefinition | string | undefined
}

export interface ITypeDefinition {
  font?: string
  size: string
  lineHeight?: number | string
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
    subheading?: ITypeDefinition
    bold?: ITypeDefinition
    small?: ITypeDefinition
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
  [key: string]: string
}

export type Unit = 'px' | 'em' | 'rem' | 'pt' | ''

export interface UnitMap {
  spacingUnits: Unit
  typeUnits: Unit
}

export type Theme = 'trueme'
