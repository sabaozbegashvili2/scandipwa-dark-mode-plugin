import { DarkModeEnableActionType, EnableDarkModeAction } from './DarkMode.types';

/**
 * @param {boolean} enabled
 * @returns {void}
 * @namespace DarkTheme/Store/DarkMode/Action/enableDarkMode */
export const enableDarkMode = (enabled: boolean): EnableDarkModeAction => ({
    type: DarkModeEnableActionType.DARK_MODE_ENABLE,
    enabled,
});
