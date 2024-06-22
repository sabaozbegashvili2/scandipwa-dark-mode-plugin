import { Reducer } from 'redux';

import BrowserDatabase from 'Util/BrowserDatabase';

import { DarkModeEnableActionType, DarkModeState, EnableDarkModeAction } from './DarkMode.types';

export const DARK_MODE_LOCALSTORAGE_KEY = 'DARK_MODE_STATUS';

/** @namespace DarkTheme/Store/DarkMode/Reducer/getInitialState */
export const getInitialState = (): DarkModeState => ({
    enabled: BrowserDatabase.getItem(DARK_MODE_LOCALSTORAGE_KEY) || false,
});

/** @namespace DarkTheme/Store/DarkMode/Reducer/DarkModeReducer */
export const DarkModeReducer: Reducer<DarkModeState, EnableDarkModeAction> = (
    state = getInitialState(),
    action,
) => {
    switch (action.type) {
    case DarkModeEnableActionType.DARK_MODE_ENABLE:
        const { enabled } = action;

        BrowserDatabase.setItem(enabled, DARK_MODE_LOCALSTORAGE_KEY);

        return {
            enabled,
        };

    default:
        return state;
    }
};

export default DarkModeReducer;
