import React from 'react';
import Avatar from 'react-avatar';
import Logo from 'assets/images/logo.png';
import Classes from './Toolbar.module.css';

const toolbar = () => {
    return (
        <header className={Classes.Toolbar}>
            <div className={Classes.Logo}>
                <a href="/">
                    <img src={Logo} alt="logo" height="50px" width="100px" />
                </a>
            </div>
            <div className={Classes.Account}>
                <Avatar name="John Doe" round={true} size="50" style={{ marginRight: '5px' }}/>
                <div> John Doe </div>
            </div>
        </header>
    )
}

export default toolbar;