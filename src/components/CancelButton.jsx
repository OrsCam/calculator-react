import React from 'react';

export const CancelButton = (props) => (
    < div className="button" onclick={props.handleClear}>
        {props.children}
    </div>
)

