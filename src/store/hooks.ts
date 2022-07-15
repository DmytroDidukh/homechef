import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

import { authActions } from './slices/auth';

import type { AppDispatch, AppState } from 'typescript/types/app';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

const allActions = {
    ...authActions,
};

export const useActions = () => {
    const dispatch = useAppDispatch();

    return bindActionCreators(allActions, dispatch);
};
