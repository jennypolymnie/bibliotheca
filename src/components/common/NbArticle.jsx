import React from 'react'
import {Label} from 'semantic-ui-react'
import './NbArticle.css'

const CountElement = ({Name, Count}) => (
    <div className="CountElement"> 
        <Label>
            <span> {Name} </span> 
            <span> {Count} </span>
        </Label>
    </div>
);

export default CountElement