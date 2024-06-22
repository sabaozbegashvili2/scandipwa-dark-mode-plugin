import { connect } from 'react-redux';

import { RootState } from 'SourceUtil/Store/Store.type';

import {
    DarkModeMapStateProps,
} from '../DarkModeToggle/DarkModeToggle.types';
import ColorInverter from './ColorInverter.component';

/** @namespace DarkTheme/Component/ColorInverter/Container/mapStateToProps */
export const mapStateToProps = (state: RootState): DarkModeMapStateProps => ({
    isDarkModeEnabled: state.DarkModeReducer.enabled,
});

// this component does not need to dispatch any actions, so we return an empty object {}
/** @namespace DarkTheme/Component/ColorInverter/Container/mapDispatchToProps */
export const mapDispatchToProps = (): {} => ({});

// connect is a Redux HOC that uses the two functions we defined above
// to pass their return values as props to ColorInverter
export default connect(mapStateToProps, mapDispatchToProps)(ColorInverter);
