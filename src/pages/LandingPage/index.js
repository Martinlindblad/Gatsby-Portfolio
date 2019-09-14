import React from 'react';
import LandingPageHelp from './LandingPageHelp';

const LandingPage = ({ name }) => (
    <div>
        <h1>
            This is my landing page
        </h1>
        <h1>
            {name && name}
        </h1>
        <LandingPageHelp />
    </div>
);

export default LandingPage;