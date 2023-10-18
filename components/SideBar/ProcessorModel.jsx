import { Checkbox } from '@nextui-org/react';
import React from 'react';

const ProcessorModel = () => {
    return (
        <div className='flex flex-col gap-0.5 pb-3'>
            <Checkbox size="sm" color="success" >Intel CDC</Checkbox>
            <Checkbox size="sm" color="success" >Intel PQC</Checkbox>
            <Checkbox size="sm" color="success" >Intel Core i3</Checkbox>
            <Checkbox size="sm" color="success" >Intel Core i5</Checkbox>
            <Checkbox size="sm" color="success" >Intel Core i7</Checkbox>
            <Checkbox size="sm" color="success" >Intel Core i9</Checkbox>
            <Checkbox size="sm" color="success">AMD Athlon</Checkbox>
            <Checkbox size="sm" color="success">AMD Ryzen 3</Checkbox>
            <Checkbox size="sm" color="success">AMD Ryzen 5</Checkbox>
            <Checkbox size="sm" color="success">AMD Ryzen 7</Checkbox>
            <Checkbox size="sm" color="success">AMD Ryzen 9</Checkbox>
            <Checkbox size="sm" color="success">Apple M1</Checkbox>
        </div>
    );
};

export default ProcessorModel;