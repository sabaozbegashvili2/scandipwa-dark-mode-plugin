import ColorInverter from '../component/ColorInverter';

export const render = (args: any, callback: Function) => {
    return (
        <ColorInverter>
            { callback(...args) }
        </ColorInverter>
    );
};

export default {
    'Component/Image/Component': {
        'member-function': {
            render,
        },
    },
};
