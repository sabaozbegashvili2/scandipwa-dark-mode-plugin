import { connect } from 'react-redux';

import { RootState } from 'SourceUtil/Store/Store.type';

import {
    DarkModeMapStateProps,
} from '../DarkModeToggle/DarkModeToggle.types';
import DarkModeComponent from './DarkModeProvider.component';

/** @namespace DarkTheme/Component/DarkModeProvider/Container/mapStateToProps */
export const mapStateToProps = (state: RootState): DarkModeMapStateProps => ({
    isDarkModeEnabled: state.DarkModeReducer.enabled,
});

/** @namespace DarkTheme/Component/DarkModeProvider/Container/mapDispatchToProps */
export const mapDispatchToProps = (): {} => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DarkModeComponent);
