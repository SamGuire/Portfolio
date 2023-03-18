export interface ISystemThemes {
  [key: string]: ITheme;
}

export interface ITheme {
  primary: string;
  secondary: string;
  textColor: string;
  iconColor: string;
}

const systemThemes: ISystemThemes = {
  dark: {
    primary: "#222",
    secondary: "#2c2c2c",
    textColor: "#fff",
    iconColor: "#fff",
  },
};

export default systemThemes;
