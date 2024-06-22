import { PureComponent } from 'react';

import { DarkModeToggleProps } from './DarkModeToggle.types';

import './DarkModeToggle.style';

/** @namespace DarkTheme/Component/DarkModeToggle/Component */
export class DarkModeToggleComponent extends PureComponent<DarkModeToggleProps> {
    render() {
        const { isDarkModeEnabled, enableDarkMode } = this.props;

        return (
            <button
              block="ModeToggleButton"
              elem="button"
              mods={ { darkMode: isDarkModeEnabled } }
              aria-label={ __('Toggle Dark Mode') }
                /* eslint-disable-next-line react/jsx-no-bind */
              onClick={ () => enableDarkMode(!isDarkModeEnabled) }
            >
                { __('Toggle Dark Mode') }
            </button>
        );
    }
}

export default DarkModeToggleComponent;
