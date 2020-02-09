import React, { useContext, useState } from 'react';
import { InputContext } from '../store';


interface PropsInterface {
    fieldName: string;
}

export const InputField = (props: PropsInterface): JSX.Element => {
    const [value, setValue] = useState('');
    const showInput = useContext(InputContext);
    return (
        <div className="d-flex flex-column">
            <span className="text-left">{props.fieldName}:</span>
            <input type="text" 
            className={'form-control ' + (showInput ? ' ' : ' d-none ')}
            value={value}
            onChange={evt => setValue(evt.target.value)} />
            {
                !showInput && 
                <span className="lead" style={{wordBreak: 'break-all'}}>
                    { value }
                </span>
            }
            
        </div>
    );
}