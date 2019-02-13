import React from 'react';
import MenuSuperiorWelcome from './MenuSuperiorWelcome';
import WelcomeBoard from './WelcomeBoard';
import Login from './Login';

const Welcome = () => (
    <div className="Wel">

        <div>
            <MenuSuperiorWelcome />
        </div>

        <div className="Bo">
            <div className="Welc">
                <WelcomeBoard />
            </div>

            <div className="Log">
                <Login />
            </div>
        </div>

    </div>
);

export default Welcome;
