import React from 'react';

const Page = (props) => (
    <div className={`ui-kit-crr-wizard__page ${props.className}`}>
        {props.children}
    </div>
);

export default Page;