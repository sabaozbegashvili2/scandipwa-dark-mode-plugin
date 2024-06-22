import { AnyAction } from 'redux';

export enum DarkModeEnableActionType {
    DARK_MODE_ENABLE = 'DARK_MODE_ENABLE',
}

export interface EnableDarkModeAction extends AnyAction {
    type: DarkModeEnableActionType.DARK_MODE_ENABLE;
    enabled: boolean;
}

export interface DarkModeState {
    enabled: boolean;
}
