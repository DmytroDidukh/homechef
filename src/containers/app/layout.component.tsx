import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from 'containers/header/header.container';

export const Layout: React.FC = (): JSX.Element => {
    return (
        <React.Fragment>
            <Header />
            <Outlet />
        </React.Fragment>
    );
};
