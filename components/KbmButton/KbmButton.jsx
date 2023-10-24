import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import './KbmButton.css'

const KbmButtonOutline = ({ btnType, btnText, btnIcon }) => {
    return (
        <button className={`group kbm-button ${btnType || 'kbm-outline'}`}>
            <span className="circle" aria-hidden="true">
                <span className='transition-all translate-x-3 group-hover:translate-x-6'>
                    {/* <FaCartPlus className='w-5 h-5' /> */}
                    {btnIcon || <FaCartPlus className='w-5 h-5' />}
                </span>
            </span>
            <span className="button-text">{btnText || 'add to cart'}</span>
        </button>
    );
};

export default KbmButtonOutline;