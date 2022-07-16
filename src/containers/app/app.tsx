import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

import { RequireAuth } from 'containers/require-auth/require-auth.container';
import { Layout } from 'containers/app/layout.component';
import { Home } from 'pages/home/home.container';

import { ROUTES } from 'constants/app';
import { useActions } from 'store/hooks';
import { auth } from 'api';
import { currentUserFactory } from 'factory/user';
import { FirebaseUser } from 'typescript/types/auth';

export const App: React.FC = (): JSX.Element => {
    const { setCurrentUser, setAuthenticated } = useActions();

    const [initializing, setInitializing] = useState(true);

    const onAuthStateChanges = (user: FirebaseUser): void => {
        console.log(user);
        if (user) {
            const currentUser = currentUserFactory(user);

            setCurrentUser(currentUser);
        } else {
            setAuthenticated(false);
        }

        if (initializing) setInitializing(false);
    };

    useEffect(() => {
        // @ts-ignore
        const subscriber = onAuthStateChanged(auth, onAuthStateChanges);

        return subscriber;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<Layout />}>
                <Route index element={<Home />} />
                <Route
                    path={ROUTES.PROFILE}
                    element={
                        <RequireAuth redirectTo={ROUTES.HOME}>
                            <h1>Profile</h1>
                        </RequireAuth>
                    }
                />
            </Route>
            <Route path={ROUTES.ERROR} element={<h1>error</h1>} />
            <Route path={ROUTES.NOT_FOUND} element={<h1>not found</h1>} />
            <Route path="/*" element={<Navigate to={ROUTES.NOT_FOUND} replace />} />
        </Routes>
    );
};
