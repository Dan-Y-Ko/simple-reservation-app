import colors, { IColors } from "./colors";
import space, { ISpace } from "./spacing";
import sizes, { ISizes } from "./size";
import {
  fonts,
  fontWeights,
  fontSizes,
  IFontWeights,
  IFontSizes,
  IFonts,
} from "./fonts";

export interface ITheme {
  colors: IColors;
  space: ISpace;
  sizes: ISizes;
  fonts: IFonts;
  fontSizes: IFontSizes;
  fontWeights: IFontWeights;
}

const theme: ITheme = {
  colors,
  space,
  sizes,
  fonts,
  fontSizes,
  fontWeights,
};

export default theme;
