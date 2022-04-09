export type ThemeType = {
  color: { [key: string]: string };
  fontFamily: { [key: string]: string };
  fontSize: { [key: string]: string };
};

const theme: ThemeType = {
  color: {
    primary: "#1F3B2C",
    primaryLight: "#588068",
    secondary: "#9D8A76",
    dark: "#161C10",
    light: "#FFF",
  },
  fontFamily: {
    default: '"HKGrotesk", sans-serif',
    headline: '"Optima", serif',
  },
  fontSize: {
    default: "16px",
  },
};

export default theme;
