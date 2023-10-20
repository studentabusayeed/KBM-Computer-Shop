import { Checkbox } from '@nextui-org/react';
import React from 'react';

const Brand = () => {
    return (
        <div className='flex flex-col gap-0.5 pb-3'>
            <Checkbox size="sm" color="success" >Asus</Checkbox>
            <Checkbox size="sm" color="success">Thunderrobot</Checkbox>
            <Checkbox size="sm" color="success">Dell</Checkbox>
            <Checkbox size="sm" color="success">Apple</Checkbox>
            <Checkbox size="sm" color="success">Microsoft</Checkbox>
        </div>
    );
};

export default Brand;