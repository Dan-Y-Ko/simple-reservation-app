// example of a generic, custom re-usable text component
import styled from "styled-components/native";

import { ITheme } from "../../theme";

// i feel like there's a better way to write this type
interface Variants {
  body: (theme: ITheme) => string;
  label: (theme: ITheme) => string;
  caption: (theme: ITheme) => string;
  error: (theme: ITheme) => string;
  hint: (theme: ITheme) => string;
  [key: string]: (theme: ITheme) => string;
}

interface StyledTextComponentProps {
  variant: string;
  theme: ITheme;
}

// set default text styles to custom text component
const defaultTextStyles = (theme: ITheme): string => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme: ITheme): string => `
    font-size: ${theme.fontSizes.body};
`;

const hint = (theme: ITheme): string => `
    font-size: ${theme.fontSizes.body};
`;

const error = (theme: ITheme): string => `
    color: ${theme.colors.text.error};
`;

const caption = (theme: ITheme): string => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const label = (theme: ITheme): string => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

const variants: Variants = {
  body,
  label,
  caption,
  error,
  hint,
};

/*  This would be called like so: <Text variant="body">
    theme and variant is being destructured from the props
    sets default styles as defined in the default text styles function
    the key in the variants object references the same function.
    Using variant=body as example, "body" would get sent into the styled component as the prop which returns
    variants[body]. The body key in the variants object refers to the body function
    which returns font-size: ${theme.fontSizes.body}.
    It also takes in the theme as well.
 */
const Text = styled.Text`
  ${({ theme }: { theme: ITheme }) => defaultTextStyles(theme)}
  ${({ variant = "body", theme }: StyledTextComponentProps) =>
    variants[variant](theme)}
`;

export default Text;
