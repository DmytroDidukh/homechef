import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';

import { useAuth } from 'hooks/useAuth';

interface RequireAuthInterface {
    redirectTo: string;
    children: JSX.Element;
}

export const RequireAuth: React.FC<RequireAuthInterface> = ({
    redirectTo,
    children,
}): JSX.Element => {
    const { authenticated } = useAuth();
    const location = useLocation();

    console.log(authenticated);

    if (authenticated === undefined) {
        return <p>Loading ...</p>;
    }

    if (authenticated === false) {
        return <Navigate to={redirectTo} state={{ from: location }} replace />;
    }
    return children;
};
