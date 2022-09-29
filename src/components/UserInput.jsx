import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeUserName } from '../store/slices/userName.slice';
import imageUserInput from '../assets/image-user-input.png'


const UserInput = () => {

    const [userName, setUserName] = useState("");
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const dispatchUserName = () => {
        dispatch(changeUserName(userName));
        navigate('/pokedex')
    }

    return (
        <div className='input-container'>
            <div className='input-welcome'>
                <h1>Hello Trainer!</h1>
                <div className='input-image-container'><img src={imageUserInput} alt="ash image" />
                </div>
            </div>
            <p>Enter your name to Start</p>
            <form onSubmit={dispatchUserName}>
                <div className='input-item'>
                    <input
                        type="text"
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                    />
                    <button>
                        <i className="fa-brands fa-telegram"></i>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UserInput; <h1>Hello Word</h1>