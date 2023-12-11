import './styles.css';
import { useState } from 'react';

const Switch = () => {
    const [position, setPosition] = useState(false);

    const changePosition = () => {
        setPosition(!position);
    };

    return (
        <div className='switch-container'>
            <label className='switch'>
                <input
                    type='checkbox'
                    name=''
                    id=''
                    checked={position}
                    onChange={changePosition}
                />
                <span className='slider round'></span>
            </label>
        </div>
    );
};

export default Switch;
