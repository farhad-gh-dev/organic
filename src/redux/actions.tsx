export const SET_LOADING = "SET_LOADING";
export const SET_NEW_THEME = "SET_NEW_THEME";

export const changeTheme = (themeName: string) => (dispatch: any) => {
  dispatch({
    type: SET_NEW_THEME,
    payload: themeName,
  });

  setTimeout(() => {
    dispatch({
      type: SET_LOADING,
    });
  }, 2000);
};
