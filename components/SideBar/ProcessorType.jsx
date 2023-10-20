import { Checkbox } from '@nextui-org/react';
import React from 'react';

const ProcessorType = () => {
    return (
        <div className='flex flex-col gap-0.5 pb-3'>
            <Checkbox size="sm" color="success" >Intel</Checkbox>
            <Checkbox size="sm" color="success">AMD</Checkbox>
            <Checkbox size="sm" color="success">Apple</Checkbox>
            <Checkbox size="sm" color="success">Microsoft</Checkbox>
        </div>
    );
};

export default ProcessorType;