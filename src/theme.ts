export type ThemeType = {
  color: { [key: string]: string };
  fontFamily: { [key: string]: string };
  fontSize: { [key: string]: string };
  potColor: { [key: string]: string };
};

const theme: ThemeType = {
  color: {
    primary: "rgb(31, 59, 44)",
    primaryLight: "rgb(88, 128, 104)",
    secondary: "rgb(157, 138, 118)",
    dark: "rgb(22, 28, 16)",
    light: "rgb(255, 255, 255)",
    gray: "rgb(171, 171, 171)",
  },
  fontFamily: {
    default: '"HKGrotesk", sans-serif',
    headline: '"Optima", serif',
  },
  fontSize: {
    default: "16px",
  },
  potColor: {
    cream: "rgb(237, 229, 218)",
    mint: "rgb(206, 224, 222)",
    blush: "rgb(255, 210, 183)",
    teracotta: "rgb(195, 131, 100)",
    black: "rgb(43, 43, 43)",
  },
};

export default theme;
