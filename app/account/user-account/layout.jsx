import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <div>Dashboard navbar.</div>
            {children}
        </div>
    );
};

export default layout;