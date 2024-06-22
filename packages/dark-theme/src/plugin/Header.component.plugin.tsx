import DarkModeToggleButton from '../component/DarkModeToggle';

import "./Header.style.plugin";

export const renderTopMenu = (args: any, callback: Function) => (
    <>
        <div block="Header" elem="DarkModeToggle">
            <DarkModeToggleButton />
        </div>
        { callback(...args) }
    </>
);

export default {
    'Component/Header/Component': {
        'member-function': {
            renderTopMenu,
        },
    },
};
