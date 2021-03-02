import React, { useEffect, useState } from 'react';
import PlayersData from '../../PlayersData/sourse.json';
import Cart from '../Cart/Cart';
import Player from '../Player/Player';
import './AllPlayers.css';


const AllPlayers = () => {
    const [players , setPlayers] = useState([]) ;
    const [cart, setCart] = useState([]) ;
    const addHandler = (player) =>{
        const newCart = [...cart , player]
        setCart(newCart)
        document.querySelector('.player-list').style.display = 'block'
    }
    useEffect(() => {
        setPlayers(PlayersData)
    }, []) ;
    return (
        <div className="all-players">
            <div className="players">
                {
                    players.map(player => <Player addHandler={addHandler} player={player} key={player.id}></Player>)
                }
            </div>
            <div className="cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default AllPlayers;