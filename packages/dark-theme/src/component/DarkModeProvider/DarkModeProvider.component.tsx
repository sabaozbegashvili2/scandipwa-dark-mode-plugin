import React, { PureComponent } from 'react';

import { DarkModeProviderProps } from './DarkModeProvider.types';

import './DarkModeProvider.style.scss';

/** @namespace DarkTheme/Component/DarkModeProvider/Component */
export class DarkModeProviderComponent extends PureComponent<DarkModeProviderProps> {
    render() {
        const { children, isDarkModeEnabled } = this.props;

        return (
            <div block="DarkModeProvider" mods={ { isEnabled: isDarkModeEnabled } }>
                { children }
            </div>
        );
    }
}

export default DarkModeProviderComponent;
