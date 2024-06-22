import DarkModeProvider from '../component/DarkModeProvider';

export const renderRouter = (args: any, callback: Function) => {
    return (
        <DarkModeProvider>
            { callback(...args) }
        </DarkModeProvider>
    );
};

export default {
    'Component/App/Component': {
        'member-function': {
            renderRouter,
        },
    },
};
