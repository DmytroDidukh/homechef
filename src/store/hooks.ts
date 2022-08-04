import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

import { authActions } from './slices/auth';
import { ingredientsActions } from './slices/ingredients';
import { appActions } from './slices/app';
import { categoriesActions } from './slices/categories';

import type { AppDispatch, AppState } from 'typescript/types';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

const allActions = {
    ...authActions,
    ...ingredientsActions,
    ...appActions,
    ...categoriesActions,
};

export const useActions = () => {
    const dispatch = useAppDispatch();

    return bindActionCreators(allActions, dispatch);
};
