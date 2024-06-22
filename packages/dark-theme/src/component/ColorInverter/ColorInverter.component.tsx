import { PureComponent } from 'react';

import { ColorInverterProps } from './ColorInverter.types';

import './ColorInverter.style';
/**
 * @namespace DarkTheme/Component/ColorInverter/Component
 */
export class ColorInverterComponent extends PureComponent<ColorInverterProps> {
    render() {
        const { isDarkModeEnabled, children } = this.props;

        return (
            <div block="ColorInverter" mods={ { isInverted: isDarkModeEnabled } }>
                { children }
            </div>
        );
    }
}

export default ColorInverterComponent;
