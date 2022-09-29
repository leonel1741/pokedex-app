import React, { useEffect, useState } from 'react';
import { set } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';
import { changeInputValue } from '../store/slices/inputColor.slice';
import { selectValue } from '../store/slices/itemsPerPage';
import { changeTheme } from '../store/slices/theme.slice';

const Settings = () => {

    const inputValue = useSelector(state => state.inputColor);
    const itemsPerPage = useSelector(state => state.itemsPerPage);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isTrue, setIsTrue] = useState(false);
    const [checkedValue, setCheckedValue] = useState(true);

    const switchTheme = () => {
        setIsTrue(!isTrue);
        dispatch(changeTheme(isTrue));
        setCheckedValue(!checkedValue);
        dispatch(changeInputValue(checkedValue));
    }

    console.log(inputValue);

    
    return (
        <div className='settings-container' >
            <div className='btn-settings-return'>
                <button onClick={() => navigate(-1)}>
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
            </div>
            <h1>Settings</h1>
            <div className='theme-settings'>
                <h2>Theme</h2>
                <div className='theme-list'>
                    <span>
                        Light
                    </span>
                    <input
                        type="checkbox"
                        // defaultChecked={!inputValue}
                        checked={inputValue}
                        onChange={switchTheme}
                    />
                    <span>
                        Dark
                    </span>
                </div>
            </div>
            <div className='items-settings'>
                <h2>Items per Page</h2>
                <select
                 value={itemsPerPage}
                 onChange={e => dispatch(selectValue(e.target.value))}>
                    <option value="4">4 Items</option>
                    <option value="8">8 Items</option>
                    <option value="12">12 Items</option>
                    <option value="16">16 Items</option>
                    <option value="20">20 Items</option>
                </select>
            </div>
        </div>
    );
};

export default Settings;