export interface IColors {
  brand: {
    primary: string;
    secondary: string;
  };
  ui: {
    primary: string;
    secondary: string;
    tertiary: string;
    disabled: string;
    error: string;
    success: string;
  };
  bg: {
    primary: string;
    secondary: string;
  };
  text: {
    primary: string;
    secondary: string;
    disabled: string;
    error: string;
    success: string;
  };
}

const colors: IColors = {
  brand: {
    primary: "#2182BD",
    secondary: "#5282BD",
  },
  ui: {
    primary: "#262626",
    secondary: "#757575",
    tertiary: "#F1F1F1",
    disabled: "#DEDEDE",
    error: "#D0421B",
    success: "#046d70",
  },
  bg: {
    primary: "#FFFFFF",
    secondary: "#F1F1F1",
  },
  text: {
    primary: "#262626",
    secondary: "#757575",
    disabled: "#9C9C9C",
    error: "#D0421B",
    success: "#046d70",
  },
};

export default colors;
