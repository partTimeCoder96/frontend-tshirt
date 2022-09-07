    import { RootState } from "../../types";
    import { createSelector } from "@reduxjs/toolkit";

    import { initialState } from "./slice";

    const selectDomain = (state:RootState) => state.welcomeState || initialState;

    export const selectWelcomeScrollIndex = createSelector(
        [selectDomain],
        (welcomeState) => welcomeState.welcome.scrollIndex
    )