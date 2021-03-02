import React from 'react';
import './Player.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Player = (props) => {
    const { name, photo, salary, club } = props.player;
    return (
            <div className="player-container">
                <div className="player-photo">
                    <img src={photo} alt="" />
                </div>
                <div className="player-info">
                    <h1>{name}</h1>
                    <p>Salary: ${salary}</p>
                    <p>Club: {club}</p>
                    <button onClick={() => props.addHandler(props.player)} className="btn btn-success mb-2"> <FontAwesomeIcon icon={faPlus} /> Hire</button>
                </div>
            </div>
        
    );
};

export default Player;