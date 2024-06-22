import { DarkModeState } from '../../store/DarkMode/DarkMode.types';

declare module 'Util/Store/Store.type' {
    export interface RootState {
        DarkModeReducer: DarkModeState;
    }
}

export interface DarkModeMapStateProps {
    isDarkModeEnabled: boolean;
}

export interface DarkModeMapDispatchToProps {
    enableDarkMode: (enabled: boolean) => void;
}

export interface DarkModeToggleProps {
    isDarkModeEnabled: boolean;
    enableDarkMode: (isEnabled: boolean) => void;
}
