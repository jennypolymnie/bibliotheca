import React from 'react';
import { Grid } from 'semantic-ui-react';
import './isMainColumn.css';


function isMainColumn(C) {
    return function wrappedWithComlumn(props) {
        return (
            <div className="mainColumn">
                <C {...props} />
            </div>
        );
    };
}


export default isMainColumn;
