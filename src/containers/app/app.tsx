import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

import { RequireAuth } from 'containers/require-auth/require-auth.container';
import { Layout } from 'containers/app/layout.component';
import { Home } from 'pages/home/home.container';
import { RecipeCreator } from 'pages/recipe-creator/recipe-creator.container';
import { LoaderBarny } from 'components/loader-barny/loader-barny.component';

import { ROUTES } from 'constants/app';
import { useActions, useAppSelector } from 'store/hooks';
import { selectAuthenticated } from 'store/slices/auth';
import { auth } from 'api';

import type { FirebaseUser } from 'typescript/types';

export const App: React.FC = (): JSX.Element => {
    const { setAuthenticated, saveUserToDatabase } = useActions();

    const authenticated = useAppSelector(selectAuthenticated);

    // const [initializing, setInitializing] = useState(true);

    const onAuthStateChanges = (user: FirebaseUser): void => {
        if (user) {
            saveUserToDatabase(user);
        } else {
            setAuthenticated(false);
        }

        // if (initializing) setInitializing(false);
    };

    useEffect(() => {
        // @ts-ignore
        const subscriber = onAuthStateChanged(auth, onAuthStateChanges);

        return subscriber;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (authenticated === undefined) {
        return <LoaderBarny />;
    }

    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route
                    path={ROUTES.PROFILE}
                    element={
                        <RequireAuth redirectTo={ROUTES.HOME}>
                            <h1>Profile</h1>
                        </RequireAuth>
                    }
                />
                <Route
                    path={ROUTES.SHOPPING_LIST}
                    element={
                        <RequireAuth redirectTo={ROUTES.HOME}>
                            <h1>Shopping List</h1>
                        </RequireAuth>
                    }
                />
                <Route
                    path={ROUTES.FAVORITES}
                    element={
                        <RequireAuth redirectTo={ROUTES.HOME}>
                            <h1>Favorites</h1>
                        </RequireAuth>
                    }
                />
                <Route
                    path={ROUTES.BOOKMARKS}
                    element={
                        <RequireAuth redirectTo={ROUTES.HOME}>
                            <h1>Bookmarks</h1>
                        </RequireAuth>
                    }
                />
                <Route path={ROUTES.RECIPES}>
                    <Route
                        path={ROUTES.RECIPES_CATEGORY}
                        element={<h1>Recipes by category :categoryId</h1>}
                    />
                    <Route
                        path={ROUTES.RECIPES_SUBCATEGORY}
                        element={<h1>Recipes by subcategory :subcategoryId</h1>}
                    />
                    <Route
                        path={ROUTES.RECIPE_NEW}
                        element={
                            <RequireAuth redirectTo={ROUTES.HOME}>
                                <RecipeCreator />
                            </RequireAuth>
                        }
                    />
                    <Route
                        path={ROUTES.RECIPE_PREVIEW}
                        element={
                            <RequireAuth redirectTo={ROUTES.HOME}>
                                <h1>Recipe Preview</h1>
                            </RequireAuth>
                        }
                    />
                    <Route
                        path={ROUTES.RECIPE_PREVIEW}
                        element={
                            <RequireAuth redirectTo={ROUTES.HOME}>
                                <h1>Recipe Preview</h1>
                            </RequireAuth>
                        }
                    />
                </Route>
            </Route>
            <Route path={ROUTES.ERROR} element={<h1>error</h1>} />
            <Route path={ROUTES.NOT_FOUND} element={<h1>not found</h1>} />
            <Route path="/*" element={<Navigate to={ROUTES.NOT_FOUND} replace />} />
        </Routes>
    );
};
