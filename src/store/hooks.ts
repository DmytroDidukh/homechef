import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

import { AppDispatch, AppState } from './store';
import { authActions } from './slices/auth';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

const allActions = {
    ...authActions,
};

export const useActions = () => {
    const dispatch = useAppDispatch();

    return bindActionCreators(allActions, dispatch);
};
