export interface IBorder {
  radius: {
    base: string,
    md: string,
    lg: string,
    xl: string,
  },
}

export interface ISpacing {
  xxs: string,
  xs: string,
  sm: string,
  default: string,
  md: string,
  lg: string,
  xl: string,
  xxl: string,
}

export interface IColourDefinition {
  base: string,
  light?: string,
  lighter?: string,
  dark?: string,
  darker?: string,
}

export interface IColour {
  background?: string,
  primary: IColourDefinition,
  secondary: IColourDefinition,
  tertiary?: IColourDefinition,
  quaternary?: IColourDefinition,
}

export interface ITypeDefinition {
  font?: string,
  size: string,
  lineHeight?: number,
  letterSpacing?: number,
  fontWeight?: string | number,
}

export interface ITypography {
  headings: {
    base?: ITypeDefinition,
    h1: ITypeDefinition,
    h2?: ITypeDefinition,
    h3?: ITypeDefinition,
    h4?: ITypeDefinition,
    h5?: ITypeDefinition,
    h6?: ITypeDefinition,
  },
  body: {
    base: ITypeDefinition,
    bold?: ITypeDefinition,
  },
}

export interface ISystem {
  borders: IBorder,
  colours: IColour,
  spacing: ISpacing,
  typography: ITypography,
  setTypeUnits: (value: Unit) => void,
  setUnits: (value: Unit) => void,
}

export interface IFonts {
  body: string,
  heading: string,
}

export type Unit = 'px' | 'em' | 'rem' | 'pt' | null

export type Theme = 'trueme'
