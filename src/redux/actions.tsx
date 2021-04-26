export const SET_NEW_THEME = "SET_NEW_THEME";

export const changeTheme = (themeName: string) => {
  return {
    type: SET_NEW_THEME,
    payload: themeName,
  };
};
