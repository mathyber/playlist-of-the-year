import React from 'react';
import './style.css';
import usersJSON from '../../jsons/users.json';
import groupJSON from '../../jsons/groups.json';
import gamesJSON from '../../jsons/games.json';
import {Card, Icon, Image, Segment} from "semantic-ui-react";
import ImageGenerator from "../ImageGenerator";

const Games = () => {

    const gameInfo = (game) => {
        let gamer1 = usersJSON.find(u=>u.id === game.user1);
        let gamer2 = usersJSON.find(u=>u.id === game.user2);
        return {
            ...game,
            user1: gamer1,
            user2: gamer2,
            results: [game.result1,game.result2,game.result3,game.result4,game.result5]
        }
    }

    return (
        <>
            {
                gamesJSON.map((g, index) => (
                    <ImageGenerator key={index} data={gameInfo(g)} id={index} isCreate/>
                ))

            }
        </>
    )
}
export default Games;