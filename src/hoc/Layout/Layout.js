import React from 'react';
import Toolbar from 'components/Toolbar/Toolbar';
import Classes from './Layout.module.css';

const layout = ({ children }) => {
    return (
        <div className={Classes.Layout}>
            <Toolbar />
            <main className={Classes.Content}>
                {children}
            </main>
        </div>
    )
}

export default layout;