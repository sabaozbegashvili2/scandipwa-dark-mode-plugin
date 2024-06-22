import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { RootState } from 'SourceUtil/Store/Store.type';
import { enableDarkMode } from '../../store/DarkMode/DarkMode.action';

import { DarkModeMapStateProps, DarkModeMapDispatchToProps } from './DarkModeToggle.types';
import DarkModeToggleComponent from './DarkModeToggle.component';

/** @namespace DarkTheme/Component/DarkModeToggle/Container/mapStateToProps */
export const mapStateToProps = (state: RootState): DarkModeMapStateProps => ({
    isDarkModeEnabled: state.DarkModeReducer.enabled,
});

/** @namespace DarkTheme/Component/DarkModeToggle/Container/mapDispatchToProps */
export const mapDispatchToProps = (dispatch: Dispatch): DarkModeMapDispatchToProps => ({
    enableDarkMode: (enabled) => dispatch(enableDarkMode(enabled)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DarkModeToggleComponent);
