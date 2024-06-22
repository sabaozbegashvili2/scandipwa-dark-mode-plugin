// @ts-ignore
import DarkModeReducer from '../store/DarkMode/DarkMode.reducer';

export const getStaticReducersPlugin = (args: any, callback: Function) => ({
    ...callback(args),
    DarkModeReducer,
});

// @ts-ignore
export default {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'Store/Index/getStaticReducers': {
        function: getStaticReducersPlugin,
    },
};
